import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { postJSON, postObject } from "~controllers/common/ipfs";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.post(
    "/object",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            data: {
              type: "object",
            },
          },
          required: ["data"],
        },
      },
    },
    postObject
  );
  server.post(
    "/json",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            data: {
              type: "string",
            },
          },
          required: ["data"],
        },
      },
    },
    postJSON
  );
};
