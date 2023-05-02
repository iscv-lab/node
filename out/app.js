import compress from '@fastify/compress';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import middie from '@fastify/middie';
import rateLimit from '@fastify/rate-limit';
import fastify from 'fastify';
import { initDotENV } from './configs/nodedotenv.js';
import { initRuntime } from './configs/runtime.js';
import { mongoServer } from './configs/mongo.js';
import 'redis';
import { apolloServer } from './configs/graphql.js';
import routes from './routes/index.js';
import fastifyApollo from '@as-integrations/fastify';
import { createContext } from './graphql/context.js';
import { ethers } from 'ethers';
import multipath from '@fastify/multipart';
import { ipfsServer } from './configs/ipfs.js';

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
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
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
// // crossOriginResourcePolicy: { policy: "cross-origin" },
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
    limits: {
        fieldNameSize: 100,
        fieldSize: 100,
        fields: 10,
        fileSize: 10 * 1024 * 1024,
        files: 10,
        headerPairs: 2000, // Max number of header key=>value pairs
    },
});
await app.register(routes);
await mongoServer();
app.listen({ port: Number(process.env.PORT) || 4000 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});

export { ipfs, provider };
