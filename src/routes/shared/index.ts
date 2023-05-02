import { FastifyInstance, FastifyPluginOptions } from "fastify";
import post from "./post";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(post, { prefix: "post" });
};
