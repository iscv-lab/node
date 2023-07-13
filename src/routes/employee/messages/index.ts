import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getHistory, getRecent } from '~controllers/employee/messages';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/recent/:employeeid', getRecent);
  server.get(
    '/histories/:employee_id',
    {
      schema: {
        params: { type: 'object', properties: { employee_id: { type: 'string' } }, required: ['employee_id'] },
        querystring: { type: 'object', properties: { business_id: { type: 'string' } }, required: ['business_id'] },
      },
    },
    getHistory,
  );
};
