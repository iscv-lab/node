import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { setInterviewAppointment } from '~controllers/employee/interview';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.post(
    '/new',
    {
      schema: {
        body: {
          type: 'object',
          properties: {
            employeeId: { type: 'number' },
            postId: { type: 'string' },
          },
          required: ['employeeId', 'postId'],
        },
      },
    },
    setInterviewAppointment,
  );
};
