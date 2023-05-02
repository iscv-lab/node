import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getPost } from "~controllers/shared/post";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/item/:id", getPost);
};
