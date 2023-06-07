import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import appointment from './appointment';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  await server.register(appointment, { prefix: 'appointment' });
};
