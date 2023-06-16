import { FastifyReply, FastifyRequest } from 'fastify';
import { BigFiveSession } from '~models/employee/BigFiveSession';
import { handleNotification } from './utils';
import { audioBigFive, videoBigFive } from '~python/bigfive';

export const reciveStarted = async (
  request: FastifyRequest<{ Querystring: { session_id: number } }>,
  reply: FastifyReply,
) => {
  const sessionId = request.query.session_id;
  await BigFiveSession.updateOne(
    { sessionId },
    {
      $set: { started: true },
    },
  );
  await reply.code(200).send('result');
  audioBigFive(sessionId);
  videoBigFive(sessionId);
};
export const reciveAudio = async (
  request: FastifyRequest<{ Querystring: { session_id: number } }>,
  reply: FastifyReply,
) => {
  const sessionId = request.query.session_id;
  const result = await BigFiveSession.findOneAndUpdate({ sessionId }, { $set: { audio: true } });
  if (result?.video && result.started) handleNotification(sessionId, result.employeeId);
  await reply.code(200).send(result);
};
export const reciveVideo = async (
  request: FastifyRequest<{ Querystring: { session_id: number } }>,
  reply: FastifyReply,
) => {
  const sessionId = request.query.session_id;
  const result = await BigFiveSession.findOneAndUpdate({ sessionId }, { $set: { video: true } });
  if (result?.audio && result?.started) handleNotification(sessionId, result.employeeId);
  await reply.code(200).send(result);
};
