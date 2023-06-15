import { FastifyReply, FastifyRequest } from 'fastify';
import { FastifyReplyType } from 'fastify/types/type-provider';
import { EInterviewError } from '~/socket/hooks/interview';
import { BigFiveSession } from '~models/employee/BigFiveSession';

export const checkDiff = async (
  request: FastifyRequest<{ Querystring: { employee_id: string } }>,
  reply: FastifyReply,
) => {
  const employeeId = request.query.employee_id;
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const recent = await BigFiveSession.exists({ employeeId, createdAt: { $gte: sevenDaysAgo } });
  if (recent?._id) throw EInterviewError.TOO_SHORT_TIME;
  await reply.code(200).send('success');
};
