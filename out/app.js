import fastifyApollo from '@as-integrations/fastify';
import compress from '@fastify/compress';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import middie from '@fastify/middie';
import multipath from '@fastify/multipart';
import rateLimit from '@fastify/rate-limit';
import fastifyStatic from '@fastify/static';
import { ethers } from 'ethers';
import fastify from 'fastify';
import socketio from 'fastify-socket.io';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';
import socketblock from './blocks/socketblock.js';
import { mongoServer } from './configs/mongo.js';
import { redisServer } from './configs/redis.js';
import 'dotenv';
import 'fs';
import 'util';
import { apolloServer } from './configs/graphql.js';
import { ipfsServer } from './configs/ipfs.js';
import { startWebSocketProvider } from './configs/web3.js';
import { createContext } from './graphql/context.js';
import routes from './routes/index.js';
import { initSocket } from './socket/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let app, ipfs, provider, pubClient;
const startInstance = async () => {
    app = fastify({
        logger: {
            level: 'info',
            file: './logger.log', // Will use pino.destination()
        },
    });
    app.setErrorHandler(async (error, request, reply) => {
        console.error(error);
        reply.status(500).send(error);
    });
    startWebSocketProvider(process.env.ETHEREUM_ENDPOINT_WS);
    provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_ENDPOINT_HTTP);
    const { ipfs: ipfsTemp } = ipfsServer();
    ipfs = ipfsTemp;
    const { pubClient: pubClientTemp, subClient } = await redisServer();
    pubClient = pubClientTemp;
    await Promise.all([
        app.register(cors, {
            credentials: true,
            origin: process.env.NODE_ENV === 'production'
                ? ['https://iscv.ftisu.vn', 'https://business.iscv.ftisu.vn', 'https://ftisu.vn']
                : [
                    'http://localhost:3000',
                    'http://localhost:3001',
                    'https://studio.apollographql.com',
                    'https://iscv.ftisu.vn',
                    'https://business.iscv.ftisu.vn',
                ],
        }),
        app.register(socketio, {
            path: '/socket.io',
            transports: ['websocket'],
            cors: {
                credentials: true,
                origin: process.env.NODE_ENV === 'production'
                    ? ['https://iscv.ftisu.vn', 'https://business.iscv.ftisu.vn', 'https://ftisu.vn']
                    : [
                        'http://localhost:3000',
                        'http://localhost:3001',
                        'https://studio.apollographql.com',
                        'https://iscv.ftisu.vn',
                        'https://business.iscv.ftisu.vn',
                    ],
            },
        }),
        app.register(rateLimit, {
            max: 500,
            timeWindow: '1 minute',
        }),
        app.register(helmet, {
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
        }),
        app.register(compress),
        app.register(middie),
        (async () => {
            const apollo = await apolloServer(app);
            app.register(fastifyApollo(apollo), {
                context: createContext({ provider, ipfs }),
            });
        })(),
        app.register(multipath, {
            // addToBody: true,
            limits: {
            // fieldNameSize: 100, // Max field name size in bytes
            // fieldSize: 100, // Max field value size in bytes
            // fields: 10, // Max number of non-file fields
            // fileSize: 299 * 1024 * 1024, // 10 MB
            // files: 10, // Max number of file fields
            // headerPairs: 2000, // Max number of header key=>value pairs
            },
        }),
        app.register(fastifyStatic, {
            root: path.join(__dirname, '..', 'public'),
            prefix: '/public/', // optional: default '/'
        }),
        app.register(routes),
        mongoServer(),
        socketblock.init(),
    ]);
    app.use('/machine', createProxyMiddleware({
        target: process.env.PYTHON_ENDPOINT,
        changeOrigin: true,
        pathRewrite: {
            '^/machine': '/static', // Path rewrite to remove '/static' prefix
        },
    }));
    // interview(app, pubClient as RedisClientType, subClient as RedisClientType);
    await Promise.all([initSocket(pubClient, subClient)]);
    app.listen({ port: Number(process.env.PORT) || 4000, host: process.env.HOST }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
};

export { app, ipfs, provider, pubClient, startInstance };
