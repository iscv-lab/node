import { FastifyInstance, FastifyPluginOptions } from "fastify";
import iig from "./iig";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  await server.register(iig, { prefix: "iig" });
};
