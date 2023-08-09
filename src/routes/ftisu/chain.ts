import { FastifyInstance } from 'fastify';
import { getFaucet } from '~controllers/ftisu/chain';

export default async (server: FastifyInstance) => {
  server.get(
    '/faucet',
    { schema: { querystring: { type: 'object', properties: { account: { type: 'string' } }, required: ['account'] } } },
    getFaucet,
  );
};
