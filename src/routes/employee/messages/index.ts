import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getRecent } from '~controllers/business/messages';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/recent/:employeeid', getRecent);
};
