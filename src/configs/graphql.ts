import { ApolloServer } from "@apollo/server";
import { fastifyApolloDrainPlugin } from "@as-integrations/fastify";

import { Context } from "../graphql/context";
import { resolvers } from "../graphql/resolvers";
import { typeDefs } from "../graphql/schema";
import { FastifyInstance } from "fastify";

export const apolloServer = async (app: FastifyInstance) => {
  const apollo = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    plugins: [fastifyApolloDrainPlugin(app)],
  });

  console.log("connect to apollo");
  return apollo;
};
