import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import iig from './iig';
import profile from './profile';
import messages from './messages';
import interview from './interview';
import bot from './bot';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  await server.register(iig, { prefix: 'iig' });
  await server.register(profile, { prefix: 'profile' });
  await server.register(messages, { prefix: 'messages' });
  await server.register(interview, { prefix: 'interview' });
  await server.register(bot, { prefix: 'bot' });
};
