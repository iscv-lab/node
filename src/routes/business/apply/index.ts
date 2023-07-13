import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getAllApply } from '~controllers/business/post';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get(
    '/list/:businessId',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            businessId: { type: 'number' },
          },
          required: ['businessId'],
        },
      },
    },
    getAllApply,
  );
};
