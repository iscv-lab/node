import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import iig from './iig';
import profile from './profile';
import messages from './messages';
import bot from './bot';
import bigfive from './bigfive';
import appointment from './appointment';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  await server.register(iig, { prefix: 'iig' });
  await server.register(profile, { prefix: 'profile' });
  await server.register(messages, { prefix: 'messages' });
  await server.register(appointment, { prefix: 'appointment' });
  await server.register(bot, { prefix: 'bot' });
  await server.register(bigfive, { prefix: 'bigfive' });
};
