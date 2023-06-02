import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getEmployee } from '~controllers/employee/profile';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get(
    '/item/:employeeid',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            employeeid: { type: 'number' },
          },
          required: ['employeeid'],
        },
      },
    },
    getEmployee,
  );
};
