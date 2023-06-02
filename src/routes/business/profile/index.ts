import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getBusiness, getBusinessByUser } from '~controllers/business/profile';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/item/:id', getBusiness);
  server.get('/user/:user', getBusinessByUser);
};
