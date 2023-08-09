import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getBusiness, getBusinessByUser, searchBusinesses } from '~controllers/business/profile';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/item/:id', getBusiness);
  server.get('/user/:user', getBusinessByUser);
  server.get(
    '/search',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            search: { type: 'string' },
          },
          required: ['search'],
        },
      },
    },
    searchBusinesses,
  );
};
