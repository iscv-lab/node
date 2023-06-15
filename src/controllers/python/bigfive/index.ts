import { FastifyReply, FastifyRequest } from 'fastify';
import { BigFiveSession } from '~models/employee/BigFiveSession';
import { handleNotification } from './utils';

export const reciveStarted = async (
  request: FastifyRequest<{ Querystring: { session_id: string } }>,
  reply: FastifyReply,
) => {
  const result = await BigFiveSession.updateOne(
    { _id: request.query.session_id },
    {
      $set: { started: true },
    },
  );
  await reply.code(200).send(result);
};
export const reciveAudio = async (
  request: FastifyRequest<{ Querystring: { session_id: string } }>,
  reply: FastifyReply,
) => {
  const sessionId = request.query.session_id;
  const result = await BigFiveSession.findByIdAndUpdate(request.query.session_id, { $set: { audio: true } });
  if (result?.video && result.started) handleNotification(sessionId, result.employeeId);
  await reply.code(200).send(result);
};
export const reciveVideo = async (
  request: FastifyRequest<{ Querystring: { session_id: string } }>,
  reply: FastifyReply,
) => {
  const sessionId = request.query.session_id;
  const result = await BigFiveSession.findByIdAndUpdate(request.query.session_id, { $set: { video: true } });
  if (result?.audio && result?.started) handleNotification(sessionId, result.employeeId);
  await reply.code(200).send(result);
};
