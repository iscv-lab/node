import { FastifyInstance } from 'fastify';
import bigfive from './bigfive';

export default async (server: FastifyInstance) => {
  server.register(bigfive, { prefix: 'big_five' });
};
