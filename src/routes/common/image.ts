import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { postImage } from "~controllers/common/image";
import { imageMiddleware } from "~middlewares/image/uploadImageMiddleware";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.post("/", { preHandler: imageMiddleware }, postImage);
};
