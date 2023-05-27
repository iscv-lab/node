import { FastifyInstance, FastifyPluginOptions } from "fastify";
import image from "./image";
import ipfs from "./ipfs";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(image, { prefix: "image" });
  server.register(ipfs, { prefix: "ipfs" });
};
