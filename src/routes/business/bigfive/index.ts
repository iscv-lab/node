import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getListBigFive } from '~controllers/business/bigfive';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get(
    '/lastest/:business_id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            business_id: { type: 'number' },
          },
          required: ['business_id'],
        },
      },
    },
    getListBigFive,
  );
};
