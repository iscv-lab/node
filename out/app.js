import fastifyApollo from '@as-integrations/fastify';
import compress from '@fastify/compress';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import middie from '@fastify/middie';
import multipath from '@fastify/multipart';
import rateLimit from '@fastify/rate-limit';
import { ethers } from 'ethers';
import fastify from 'fastify';
import socketio from 'fastify-socket.io';
import { mongoServer } from './configs/mongo.js';
import { redisServer } from './configs/redis.js';
import { initDotENV } from './configs/nodedotenv.js';
import { initRuntime } from './configs/runtime.js';
import { apolloServer } from './configs/graphql.js';
import { ipfsServer } from './configs/ipfs.js';
import { createContext } from './graphql/context.js';
import routes from './routes/index.js';
import { interview } from './socket/interview.js';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
initDotENV();
initRuntime();
const app = fastify({
    logger: {
        level: "info",
        file: "./logger.log", // Will use pino.destination()
    },
});
app.setErrorHandler(async (error, request, reply) => {
    console.error(error);
    reply.status(500).send(error);
});
await app.register(cors, {
    credentials: true,
    origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "https://studio.apollographql.com",
        "https://iscv.ftisu.vn",
        "https://business.iscv.ftisu.vn",
    ],
});
const { pubClient, subClient } = await redisServer();
await app.register(socketio, {
    cors: {
        origin: [
            "http://localhost:3000",
            "http://localhost:3001",
            "https://studio.apollographql.com",
            "https://iscv.ftisu.vn",
            "https://business.iscv.ftisu.vn",
        ],
    },
});
await app.register(rateLimit, {
    max: 500,
    timeWindow: "1 minute",
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
    // // crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
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
        fieldNameSize: 100,
        fieldSize: 100,
        fields: 10,
        fileSize: 299 * 1024 * 1024,
        files: 10,
        headerPairs: 2000, // Max number of header key=>value pairs
    },
});
await app.register(fastifyStatic, {
    root: path.join(__dirname, "..", 'public'),
    prefix: "/public/", // optional: default '/'
});
await app.register(routes);
interview(app, pubClient, subClient);
await mongoServer();
app.listen({ port: Number(process.env.PORT) || 4000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

export { ipfs, provider };
