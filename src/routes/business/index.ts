import { FastifyInstance, FastifyPluginOptions } from "fastify";
import profile from "./profile";
import posts from "./posts";
import iig from "./iig";
import apply from "./apply";
import messages from "./messages";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(profile, { prefix: "profile" });
  server.register(posts, { prefix: "posts" });
  server.register(iig, { prefix: "iig" });
  server.register(apply, { prefix: "apply" });
  server.register(messages, { prefix: "messages" });
};
