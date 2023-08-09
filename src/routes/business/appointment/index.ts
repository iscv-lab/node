import { FastifyInstance } from 'fastify';
import { setInterviewAppointment } from '~controllers/business/appointment';

export default async (server: FastifyInstance) => {
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
