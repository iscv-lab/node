import { FastifyReply, FastifyRequest } from 'fastify';
import { BigFive } from '~models/employee/BigFive';

export const readBigFive = async (
  request: FastifyRequest<{ Querystring: { bigfive_id: string } }>,
  reply: FastifyReply,
) => {
  const bigfiveId = request.query.bigfive_id;
  const result = await BigFive.findByIdAndUpdate(bigfiveId, { $set: { isRead: true } });
  await reply.code(200).send(result);
};
