import { FastifyInstance, FastifyPluginOptions } from "fastify";
import profile from "./profile";
import posts from "./posts";
import iig from "./iig";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(profile, { prefix: "profile" });
  server.register(posts, { prefix: "posts" });
  server.register(iig, { prefix: "iig" });
};
