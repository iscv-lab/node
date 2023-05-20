import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getBusiness, getBusinessByUser } from "~controllers/business/profile";
import { postAvatar } from "~controllers/employee/profile";
import { imageMiddleware } from "~middlewares/image/uploadImageMiddleware";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.post("/avatar", { preHandler: imageMiddleware }, postAvatar);
  server.get("/item/:id", getBusiness);
  server.get("/user/:user", getBusinessByUser);
};
