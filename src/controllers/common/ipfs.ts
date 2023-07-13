import { FastifyReply, FastifyRequest } from 'fastify';
import { ipfs } from '~/app';

export const postObject = async (request: FastifyRequest<{ Body: { data: object } }>, reply: FastifyReply) => {
  const data = request.body.data;
  const { cid } = await ipfs.add(JSON.stringify(data));

  reply.code(200).send(cid.toString());
};

export const postJSON = async (request: FastifyRequest<{ Body: { data: string } }>, reply: FastifyReply) => {
  const data = request.body.data;
  const { cid } = await ipfs.add(data);

  reply.code(200).send(cid.toString());
};
