import { FastifyInstance } from 'fastify';
import { checkDiff, getLastestSessionId } from '~controllers/employee/bigfive';

export default async (server: FastifyInstance) => {
  // server.get(
  //   '/start',
  //   {
  //     schema: {
  //       querystring: {
  //         type: 'object',
  //         properties: {
  //           employee_id: {
  //             type: 'number',
  //           },
  //         },
  //         required: ['employee_id'],
  //       },
  //     },
  //   },
  //   checkDiff,
  // );
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
