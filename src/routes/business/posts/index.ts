import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getMyPosts } from "~controllers/business/post";
import { getBusiness, getBusinessByUser } from "~controllers/business/profile";
import { postAvatar } from "~controllers/employee/profile";
import {
  imageMiddleware,
  removeTemp,
} from "~middlewares/image/uploadImageMiddleware";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/myposts/:userid", getMyPosts);
};
