import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import iig from './iig';
import profile from './profile';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  await server.register(iig, { prefix: 'iig' });
  await server.register(profile, { prefix: 'profile' });
};
