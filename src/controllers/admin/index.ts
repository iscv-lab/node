import { FastifyReply, FastifyRequest } from 'fastify';
import { readFileSync } from 'fs';
import { IData } from './types';
import { BigFiveTemplate } from '~models/employee/BigFiveTemplate';

export const crawlBigFiveTemplate = async (request: FastifyRequest, reply: FastifyReply) => {
  const init: IData[] = JSON.parse(readFileSync('./json/big_five.json', 'utf8'));
  const pipeline = init.map(async (template, index) => {
    const newTemplate = new BigFiveTemplate({
      bigFiveId: index + 1,
      type: template.Type,
      startScore: template.StartScore,
      endScore: template.EndScore,
      comment: template.Comment,
    });
    return await newTemplate.save();
  });
  const result = await Promise.all(pipeline);
  await reply.code(201).send(result);
};
