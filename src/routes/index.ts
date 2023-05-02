import { FastifyInstance, FastifyPluginOptions } from "fastify";
import test from "./test";
import employee from "./employee";
import business from "./business";
import common from "./common";
import shared from "./shared";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/", {}, async (request, reply) => {
    return reply.code(200).send({ message: "hello" });
  });

  server.register(test, { prefix: "test" });
  server.register(employee, { prefix: "employee" });
  server.register(business, { prefix: "business" });
  server.register(common, { prefix: "common" });
  server.register(shared, { prefix: "shared" });
};
