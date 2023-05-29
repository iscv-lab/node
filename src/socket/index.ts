import { FastifyInstance } from "fastify";
import fs from "fs";
import { RedisClientType } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";
import { app } from "~/app";
import socketblock from "~blocks/socketblock";
import { ERole } from "~types/index";
import { messages } from "./messages";

export const initSocket = (
  pubClient: RedisClientType,
  subClient: RedisClientType
) => {
  app.ready().then(() => {
    app.io.adapter(createAdapter(pubClient, subClient));

    app.io.on("connection", async (socket) => {
      console.log(`Client ${socket.id} connected.`);
      const employeeId = Number(socket.handshake.query["employeeId"]);
      const businessId = Number(socket.handshake.query["businessId"]);
      const id =
        (Number.isInteger(employeeId) && employeeId) ??
        (Number.isInteger(businessId) && businessId);
      const role =
        (Number.isInteger(employeeId) && ERole.EMPLOYEE) ??
        (Number.isInteger(businessId) && ERole.BUSINESS);

      if (role === false) return;
      if (id === false) return;

      await socketblock.add(id, socket.id, role);

      messages(socket);

      socket.on("disconnect", async () => {
        console.log(`Client ${socket.id} disconnected.`);
      });
    });
  });
};
