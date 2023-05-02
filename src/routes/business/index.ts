import { FastifyInstance, FastifyPluginOptions } from "fastify";
import profile from "./profile";
import posts from "./posts";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(profile, { prefix: "profile" });
  server.register(posts, { prefix: "posts" });
};
