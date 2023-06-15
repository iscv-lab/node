import { FastifyInstance } from 'fastify';
import { readBigFive } from '~controllers/employee/bigfive';

export default async (server: FastifyInstance) => {
  server.put(
    '/read',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            bigfive_id: {
              type: 'string',
            },
          },
          required: ['bigfive_id'],
        },
      },
    },
    readBigFive,
  );
};
