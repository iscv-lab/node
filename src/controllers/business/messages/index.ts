import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useEmployee } from '~contracts/useEmployee';
import { Messages } from '~models/messages/Messages';
import { IEmployee } from '~types/employee';
import { quickSort } from '~utils/quickSort';

export const getRecent = async (request: FastifyRequest<{ Params: { businessid: number } }>, reply: FastifyReply) => {
  const businessId = request.params.businessid;

  const list = await Messages.aggregate([
    {
      $match: {
        businessId: Number(businessId),
      },
    },
    { $sort: { updatedAt: -1 } }, // sort by createdAt in descending order
    { $group: { _id: '$employeeId', newest: { $first: '$$ROOT' } } }, // group by name and get the newest document for each group
  ]).exec();

  const emplopyeeContract = useEmployee(provider);
  const pipeline = list.map(async (messages) => {
    const emplopyee = await emplopyeeContract
      .getProfile(messages.newest.employeeId)
      .catch((error) => console.log(error));
    if (!emplopyee) return;
    const data: IEmployee & {
      updatedAt: Date;
    } = {
      id: emplopyee.id.toNumber(),
      user: emplopyee.user,
      name: emplopyee.name,
      phone: emplopyee.phone,
      professional: emplopyee.professional,
      email: emplopyee.email,
      github: emplopyee.github,
      linkedin: emplopyee.linkedin,
      sourceImage: emplopyee.sourceImage,
      updatedAt: messages.newest.updatedAt,
    };
    return data;
  });
  const rawRecent = (await Promise.all(pipeline)).filter((x) => Boolean(x));
  const result = quickSort(rawRecent, (a, b) => b!.updatedAt.getTime() - a!.updatedAt.getTime());
  await reply.code(200).send(result);
};
