import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
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
  const result = {
    hadBigfive: Boolean(recent?._id),
  };
  await reply.code(200).send(result);
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

export const readBigFive = async (
  request: FastifyRequest<{ Querystring: { employee_id: number } }>,
  reply: FastifyReply,
) => {
  const employeeId = request.query.employee_id;
  await BigFiveSession.updateMany({ employeeId }, { $set: { isRead: true } });
  await reply.code(200).send('success');
};
