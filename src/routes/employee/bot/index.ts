import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getRecentTask } from '~controllers/employee/bot';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get(
    '/recent_task/:employeeid',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            employeeid: {
              type: 'number',
            },
          },
          required: ['employeeid'],
        },
      },
    },
    getRecentTask,
  );
};
