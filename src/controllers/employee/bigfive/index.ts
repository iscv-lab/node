import { FastifyReply, FastifyRequest } from 'fastify';
import { FastifyReplyType } from 'fastify/types/type-provider';
import { provider } from '~/app';
import { EInterviewError } from '~/socket/hooks/interview';
import { useEmployee } from '~contracts/useEmployee';
import { BigFiveSession } from '~models/employee/BigFiveSession';
import { BigFiveStructOutput } from '~typechain/controller/employee/EmployeeController';

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

export const getLastestSessionId = async (
  request: FastifyRequest<{ Querystring: { employee_id: number } }>,
  reply: FastifyReply,
) => {
  const employeeId = request.query.employee_id;
  const employeeContract = useEmployee(provider);
  const bigfives = await employeeContract.getBigFives();
  if (!bigfives) {
    await reply.code(500);
    return;
  }
  let bigfive: BigFiveStructOutput | undefined = undefined;
  for (let i = bigfives.length - 1; i >= 0; i--) {
    if (bigfives!.at(i)!.employeeId.eq(employeeId)) {
      bigfive = bigfives.at(i);
      break;
    }
  }
  if (!bigfive) {
    await reply.code(400).send('not found');
    return;
  }
  const result = bigfive.id.toNumber();
  await reply.code(200).send(result);
};
