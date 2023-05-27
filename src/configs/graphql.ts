import { ApolloServer } from "@apollo/server";
import { fastifyApolloDrainPlugin } from "@as-integrations/fastify";
import path from "path";
import { Context } from "../graphql/context";
import { resolvers } from "../graphql/resolvers";
import { FastifyInstance } from "fastify";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

export const apolloServer = async (app: FastifyInstance) => {
  const apollo = new ApolloServer<Context>({
    typeDefs: readFileSync("./schema/index.graphql", "utf-8"),
    resolvers,
    plugins: [fastifyApolloDrainPlugin(app)],
  });

  console.log("connect to apollo");
  return apollo;
};
