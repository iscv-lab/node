import { FastifyInstance } from 'fastify';
import { checkDiff, getLastestSessionId, readBigFive } from '~controllers/employee/bigfive';

export default async (server: FastifyInstance) => {
  server.get(
    '/read_big_five',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            employee_id: {
              type: 'number',
            },
          },
          required: ['employee_id'],
        },
      },
    },
    readBigFive,
  );
  server.get(
    '/check_diff',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            employee_id: {
              type: 'number',
            },
          },
          required: ['employee_id'],
        },
      },
    },
    checkDiff,
  );
  server.get(
    '/lastest',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            employee_id: {
              type: 'number',
            },
          },
          required: ['employee_id'],
        },
      },
    },
    getLastestSessionId,
  );
};
