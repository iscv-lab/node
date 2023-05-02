import { FastifyInstance, FastifyPluginOptions } from "fastify";
import image from "./image";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/", {}, async (request, reply) => {
    return reply.code(200).send({ message: "hello" });
  });
  server.register(image, { prefix: "image" });
};
