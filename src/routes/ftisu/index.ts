import { FastifyInstance } from 'fastify';
import chain from './chain';

export default async (server: FastifyInstance) => {
  server.register(chain, { prefix: 'chain' });
};
