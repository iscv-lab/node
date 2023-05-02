import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { postAvatar } from "~controllers/employee/profile";
import {
  imageMiddleware,
  removeTemp,
} from "~middlewares/image/uploadImageMiddleware";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.post(
    "/avatar",
    { preHandler: imageMiddleware, onResponse: removeTemp },
    postAvatar
  );
  // server.get("/avatar/:cid", getAvatar);
};
