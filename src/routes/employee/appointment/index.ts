import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { readInterviewAppointment } from '~controllers/employee/appointment';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get(
    '/read',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            interview_id: { type: 'string' },
          },
          required: ['interview_id'],
        },
      },
    },
    readInterviewAppointment,
  );
};
