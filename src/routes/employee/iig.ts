import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { postRequest, putApproved } from "~controllers/employee/iig";
import { EIIGRequest } from "~types/business/iig";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.post(
    "/request",
    {
      schema: {
        body: {
          type: "object",
          properties: {
            employeeId: { type: "string" },
            certificateType: {
              type: "string",
              enum: Object.values(EIIGRequest),
            },
          },
          required: ["employeeId", "certificateType"],
        },
      },
    },
    postRequest
  );
};
