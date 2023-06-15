import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useBusiness } from '~contracts/useBusiness';
import { InterviewAppointment } from '~models/employee/InterviewAppointment';
import { ERole } from '~types/index';
import { EBotCategory, IBotMessages } from '~types/messages/bot';

export const getRecentTask = async (
  request: FastifyRequest<{ Params: { employeeid: number } }>,
  reply: FastifyReply,
) => {
  const employeeId = request.params.employeeid;
  const businessContract = useBusiness(provider);
  const [interviewData] = await Promise.all([
    InterviewAppointment.find(
      {
        employeeId: employeeId,
      },
      {},
      {},
    ),
  ]);
  // const pipelineInterview = interviewData.map(async (appointment) => {
  //   const apply = await businessContract.getApply(appointment.applyId);
  //   const business = await businessContract.getProfile(apply.businessId.toNumber());
  //   const temp = {
  //     _id: appointment._id,
  //     role: ERole.BUSINESS,
  //     content: '',
  //     time: appointment.updatedAt,
  //     category: EBotCategory.NEW_INTERVIEW,
  //     isRead: appointment.isRead,
  //     metadata: {
  //       _id: appointment._id,
  //       fromTime: appointment.fromTime,
  //       toTime: appointment.toTime,
  //       businessImage: business.sourceImage,
  //       businessId: business.id.toNumber(),
  //       businessName: business.name,
  //     },
  //   };
  //   return temp;
  // });

  // const pipelineBigFive = bigFiveData.map(async (bigfive) => {
  //   return {
  //     _id: bigfive._id,
  //     role: ERole.BUSINESS,
  //     content: '',
  //     time: bigfive.updatedAt,
  //     category: EBotCategory.NEW_BIGFIVE_RESULT,
  //     isRead: bigfive.isRead,
  //   };
  // });

  // const result = (await Promise.all([])).sort((a, b) => b.time.getTime() - a.time.getTime());
  await reply.code(200).send([]);
};
