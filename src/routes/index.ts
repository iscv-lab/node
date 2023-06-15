import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import employee from './employee';
import business from './business';
import common from './common';
import shared from './shared';
import admin from './admin';
import python from './python';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/', {}, async (request, reply) => {
    return reply.code(200).send({ message: 'hello' });
  });

  server.register(employee, { prefix: 'employee' });
  server.register(business, { prefix: 'business' });
  server.register(common, { prefix: 'common' });
  server.register(shared, { prefix: 'shared' });
  server.register(admin, { prefix: 'admin' });
  server.register(python, { prefix: 'python' });
};
