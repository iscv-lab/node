import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getListLR, getListRequest } from "~controllers/business/iig";
import { putApproved } from "~controllers/employee/iig";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/listlr", getListLR);
  server.get("/listrequest", getListRequest);
  server.put(
    "/approved",
    {
      schema: {
        querystring: {
          type: "object",
          properties: {
            requestId: { type: "string" },
          },
          required: ["requestId"],
        },
      },
    },
    putApproved
  );
};
