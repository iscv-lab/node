import { FastifyInstance } from "fastify";
import fs from "fs";
import { RedisClientType } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";

export const interview = (
  app: FastifyInstance,
  pubClient: RedisClientType,
  subClient: RedisClientType
) => {
  app.ready().then(() => {
    app.io.adapter(createAdapter(pubClient, subClient));
    
    app.io.on("connection", (socket) => {
      console.log(`Client ${socket.id} connected.`);
      const tmpFilePath = "./uploads/interview/tempfile.webm";
      let destStream: any = undefined;
      socket.on("start-interview", () => {
        destStream = fs.createWriteStream(tmpFilePath);
      });
      socket.on("chunk-interview", (chunk) => {
        destStream.write(chunk);
      });
      socket.on("stop-interview", () => {
        destStream.end(() => {
          console.log("Data has been written to the file.");
        });
      });

      socket.on("disconnect", async () => {
        console.log(`Client ${socket.id} disconnected.`);
      });
    });
  });
};
