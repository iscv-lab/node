import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { crawlBigFiveTemplate } from '~controllers/admin';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/crawl_big_five_template', crawlBigFiveTemplate);
};
