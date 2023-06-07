import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useBusiness } from '~contracts/useBusiness';
import { InterviewAppointment } from '~models/employee/InterviewAppoint';
import { ERole } from '~types/index';
import { EBotCategory, IBotMessages } from '~types/messages/bot';

export const getRecentTask = async (
  request: FastifyRequest<{ Params: { employeeid: number } }>,
  reply: FastifyReply,
) => {
  const employeeId = request.params.employeeid;
  const businessContract = useBusiness(provider);
  const data = await InterviewAppointment.find(
    {
      employeeId: employeeId,
    },
    {},
    {},
  );
  const pipeline = data.map(async (appointment) => {
    const apply = await businessContract.getApply(appointment.applyId);
    const business = await businessContract.getProfile(apply.businessId.toNumber());
    const temp = {
      _id: appointment._id,
      role: ERole.BUSINESS,
      content: '',
      time: appointment.updatedAt,
      category: EBotCategory.NEW_INTERVIEW,
      metadata: {
        _id: appointment._id,
        fromTime: appointment.fromTime,
        toTime: appointment.toTime,
        businessImage: business.sourceImage,
        businessId: business.id.toNumber(),
        businessName: business.name,
      },
    };
    return temp;
  });

  const result = (await Promise.all(pipeline)).sort((a, b) => b.time.getTime() - a.time.getTime());
  await reply.code(200).send(result);
};
