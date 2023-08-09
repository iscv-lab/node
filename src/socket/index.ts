import { FastifyInstance } from 'fastify';
import fs from 'fs';
import { RedisClientType } from 'redis';
import { createAdapter } from '@socket.io/redis-adapter';
import { app } from '~/app';
import socketblock from '~blocks/socketblock';
import { ERole } from '~types/index';
import { messages } from './messages';
import { interview } from './interview';

export const initSocket = async (pubClient: RedisClientType, subClient: RedisClientType) => {
  await app.ready().then(() => {
    app.io.adapter(createAdapter(pubClient, subClient, {}));
    // app.io.adapter();
    app.io.on('connection', async (socket) => {
      console.log(`Client main ${socket.id} connected.`);
      const employeeId = Number(socket.handshake.query['employeeId']);
      const businessId = Number(socket.handshake.query['businessId']);

      const id = Number.isInteger(employeeId) ? employeeId : Number.isInteger(businessId) ? businessId : undefined;
      const role = Number.isInteger(employeeId)
        ? ERole.EMPLOYEE
        : Number.isInteger(businessId)
        ? ERole.BUSINESS
        : undefined;

      if (role === undefined) return;
      if (id === undefined) return;
      await socketblock.add(id, socket.id, role);

      messages(socket);
      interview(socket);

      socket.on('disconnect', async () => {
        console.log(`Client main ${socket.id} disconnected.`);
      });
    });
  });
};
