import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getListLR } from "~controllers/business/iig";


export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/listlr", getListLR);
};
