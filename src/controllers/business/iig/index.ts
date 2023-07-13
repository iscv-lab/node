import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useIIG } from '~contracts/iig/useIIG';
import { ILR } from './types';
import { IIGRequest } from '~models/business/iig/IIGRequest';

export const getListLR = async (request: FastifyRequest, reply: FastifyReply) => {
  const iigContract = useIIG(provider);

  const listLR = (await iigContract.getAllIIGLRResult()).map((lr) => {
    return {
      id: lr.id.toNumber(),
      employeeId: lr.employeeId.toNumber(),
      testDate: lr.testDate.toNumber(),
      shiftTest: lr.shiftTest,
      expireDate: lr.expireDate.toNumber(),
      listeningScore: lr.listeningScore.toNumber(),
      readingScore: lr.readingScore.toNumber(),
      time: lr.time.toNumber(),
    } as ILR;
  });
  await reply.code(200).send(listLR.reverse());
};

export const getListRequest = async (request: FastifyRequest, reply: FastifyReply) => {
  const list = await IIGRequest.find({}, {}, { skip: 0, limit: 100 });
  await reply.code(200).send(list);
};
