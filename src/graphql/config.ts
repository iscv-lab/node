import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { ethers } from "ethers";
import { IncomingMessage, Server, ServerResponse } from "http";
import { Context } from "./context";
import { resolvers } from "./resolver";
import { typeDefs } from "./schema";

export const apolloServer = async (
  server: Server<typeof IncomingMessage, typeof ServerResponse>,
  provider: ethers.providers.WebSocketProvider
) => {
  const apollo = new ApolloServer<Context>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer: server })],
  });
  await apollo.start();
  console.log("connect to apollo");
  return apollo;
};
