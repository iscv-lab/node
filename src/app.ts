import compress from "@fastify/compress";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import middie from "@fastify/middie";
import rateLimit from "@fastify/rate-limit";
import fastify, { FastifyInstance } from "fastify";
import { initDotENV } from "~configs/nodedotenv";
import { initRuntime } from "~configs/runtime";
import { apolloServer, mongoServer } from "~configs/index";
import routes from "~routes/index";
import fastifyApollo, { fastifyApolloHandler } from "@as-integrations/fastify";
import { Context, createContext } from "~graphql/context";
import { ethers } from "ethers";
import multipath from "@fastify/multipart";
import { ipfsServer } from "~configs/ipfs";

initDotENV();

initRuntime();

const app: FastifyInstance = fastify({
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

const provider = new ethers.providers.JsonRpcProvider(
  process.env.ETHEREUM_ENDPOINT
);
const { ipfs } = ipfsServer();

await app.register(fastifyApollo(apollo), {
  context: createContext({ provider, ipfs }),
});

app.register(multipath, {
  limits: {
    fieldNameSize: 100, // Max field name size in bytes
    fieldSize: 100, // Max field value size in bytes
    fields: 10, // Max number of non-file fields
    fileSize: 10 * 1024 * 1024, // 10 MB
    files: 10, // Max number of file fields
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
