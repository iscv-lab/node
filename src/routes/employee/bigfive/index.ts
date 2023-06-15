import { FastifyInstance } from 'fastify';
import { checkDiff } from '~controllers/employee/bigfive';

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
};
