import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getBigFive, readInterviewAppointment, setInterviewAppointment } from '~controllers/employee/interview';

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
  server.get(
    '/bigfive',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            employee_id: { type: 'number' },
          },
          required: ['employee_id'],
        },
      },
    },
    getBigFive,
  );
};
