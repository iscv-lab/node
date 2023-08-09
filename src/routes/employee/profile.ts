import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getEmployee, searchEmployees } from '~controllers/employee/profile';

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
    searchEmployees,
  );
};
