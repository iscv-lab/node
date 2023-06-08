import fastifyApollo from '@as-integrations/fastify';
import compress from '@fastify/compress';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import middie from '@fastify/middie';
import multipath from '@fastify/multipart';
import rateLimit from '@fastify/rate-limit';
import fastifyStatic from '@fastify/static';
import { ethers } from 'ethers';
import fastify, { FastifyInstance } from 'fastify';
import socketio from 'fastify-socket.io';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { RedisClientType } from 'redis';
import { fileURLToPath } from 'url';
import socketblock from '~blocks/socketblock';
import { apolloServer, mongoServer, redisServer } from '~configs/index';
import { ipfsServer } from '~configs/ipfs';
import { initDotENV } from '~configs/nodedotenv';
import { initRuntime } from '~configs/runtime';
import { createContext } from '~graphql/context';
import routes from '~routes/index';
import { initSocket } from './socket';
import { Socket } from 'socket.io';
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from './socket/types';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

declare module 'fastify' {
  interface FastifyRequest {
    io: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
  }
}

initDotENV();

initRuntime();

const app: FastifyInstance = fastify({
  logger: {
    level: 'info',
    file: './logger.log', // Will use pino.destination()
  },
});

app.setErrorHandler(async (error, request, reply) => {
  console.error(error);
  reply.status(500).send(error);
});

await app.register(cors, {
  credentials: true,
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://studio.apollographql.com',
    'https://iscv.ftisu.vn',
    'https://business.iscv.ftisu.vn',
  ],
});

const { pubClient, subClient } = await redisServer();

await app.register(socketio, {
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://studio.apollographql.com',
      'https://iscv.ftisu.vn',
      'https://business.iscv.ftisu.vn',
    ],
  },
});
await app.register(rateLimit, {
  max: 500,
  timeWindow: '1 minute',
});
await app.register(helmet, {
  // contentSecurityPolicy: false,
  // crossOriginEmbedderPolicy: false,
  // crossOriginOpenerPolicy: false,
  // crossOriginResourcePolicy: false,
  // dnsPrefetchControl: false,
  // expectCt: false,
  // frameguard: false,
  // hidePoweredBy: false,
  // hsts: false,
  // ieNoOpen: false,
  // noSniff: false,
  // originAgentCluster: false,
  // permittedCrossDomainPolicies: false,
  // referrerPolicy: false,
  // xssFilter: false,
  // crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' },
});
await app.register(compress);

await app.register(middie);

const apollo = await apolloServer(app);
await apollo.start();

const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_ENDPOINT);
const { ipfs } = ipfsServer();

await app.register(fastifyApollo(apollo), {
  context: createContext({ provider, ipfs }),
});

app.register(multipath, {
  // addToBody: true,
  limits: {
    fieldNameSize: 100, // Max field name size in bytes
    fieldSize: 100, // Max field value size in bytes
    fields: 10, // Max number of non-file fields
    fileSize: 299 * 1024 * 1024, // 10 MB
    files: 10, // Max number of file fields
    headerPairs: 2000, // Max number of header key=>value pairs
  },
});

await app.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'public'),
  prefix: '/public/', // optional: default '/'
});
app.use(
  '/machine',
  createProxyMiddleware({
    target: 'http://localhost:5001',
    changeOrigin: true,
    pathRewrite: {
      '^/machine': '/static', // Path rewrite to remove '/static' prefix
    },
  }),
);

await app.register(routes);

// interview(app, pubClient as RedisClientType, subClient as RedisClientType);

initSocket(pubClient as RedisClientType, subClient as RedisClientType);

await Promise.all([mongoServer(), socketblock.init()]);

app.listen({ port: Number(process.env.PORT) || 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
export { app, ipfs, provider, pubClient };
