import { FastifyInstance } from 'fastify';
import { searchBusiness } from '~controllers/employee/search';

export default async (server: FastifyInstance) => {
  server.get('/business', searchBusiness);
};
