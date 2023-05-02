import { FastifyInstance, FastifyPluginOptions } from "fastify";
import profile from "./profile";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.register(profile, { prefix: "profile" });
};
