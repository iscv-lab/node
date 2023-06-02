import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import iig from './iig';
import profile from './profile';
import messages from './messages';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  await server.register(iig, { prefix: 'iig' });
  await server.register(profile, { prefix: 'profile' });
  await server.register(messages, { prefix: 'messages' });
};
