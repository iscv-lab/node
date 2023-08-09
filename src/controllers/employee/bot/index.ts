import { FastifyReply, FastifyRequest } from 'fastify';
import { v4 } from 'uuid';
import { provider } from '~/app';
import { useBusiness } from '~contracts/useBusiness';
import { BigFiveSession } from '~models/employee/BigFiveSession';
import { InterviewAppointment } from '~models/employee/InterviewAppointment';
import { ERole } from '~types/index';
import { EBotCategory, IBotMessages } from '~types/messages/bot';

export const getRecentTask = async (
  request: FastifyRequest<{ Params: { employeeid: number } }>,
  reply: FastifyReply,
) => {
  const employeeId = request.params.employeeid;
  const businessContract = useBusiness(provider);
  const [interviewData, bigFiveData] = await Promise.all([
    InterviewAppointment.find(
      {
        employeeId: employeeId,
      },
      {},
      {},
    ),
    BigFiveSession.find(
      {
        cid: { $exists: true },
        employeeId,
        $or: [{ isRead: { $exists: false } }, { isRead: false }],
      },
      {},
      { sort: { updatedAt: 1 } },
    ),
  ]);
  const pipelineInterview = interviewData.map(async (appointment) => {
    const apply = await businessContract.getApply(appointment.applyId).catch((error) => {
      console.log(error);
    });
    if (!apply) return;
    const business = await businessContract.getProfile(apply.businessId.toNumber()).catch((error) => {
      console.log(error);
    });
    const temp: IBotMessages = {
      _id: appointment._id,
      role: ERole.BUSINESS,
      content: '',
      time: appointment.updatedAt,
      category: EBotCategory.NEW_INTERVIEW,
      isRead: appointment.isRead,
      metadata: {
        _id: appointment._id,
        time: appointment.time,
        businessImage: business?.sourceImage,
        businessId: business?.id.toNumber(),
        businessName: business?.name,
      },
    };
    return temp;
  });

  const pipelineBigFive = bigFiveData.map(async (bigfive) => {
    const temp: IBotMessages = {
      _id: bigfive._id,
      role: ERole.BUSINESS,
      content: '',
      sessionId: bigfive.sessionId,
      time: bigfive.updatedAt,
      category: EBotCategory.NEW_BIGFIVE_RESULT,
      isRead: bigfive.isRead,
      metadata: {
        _id: v4(),
        cid: bigfive.cid,
      },
    };
    return temp;
  });

  const result = (await Promise.all([...pipelineInterview, ...pipelineBigFive]))
    .filter((x) => Boolean(x))
    .sort((a, b) => b!.time.getTime() - a!.time.getTime());
  await reply.code(200).send(result);
};
