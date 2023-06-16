import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import socketblock from '~blocks/socketblock';
import { useBusiness } from '~contracts/useBusiness';
import { InterviewAppointment } from '~models/employee/InterviewAppointment';
import { ERole } from '~types/index';
import { EBotCategory } from '~types/messages/bot';

export const setInterviewAppointment = async (
  request: FastifyRequest<{ Body: { employeeId: number; postId: string; businessId: number; time: string } }>,
  reply: FastifyReply,
) => {
  const employeeId = request.body.employeeId;
  const postId = request.body.postId;
  const businessId = request.body.businessId;
  const time = request.body.time;
  const businessContract = useBusiness(provider);

  const [appliesData] = await Promise.all([businessContract.getAllApplies()]);

  const apply = appliesData.find((x) => x.employeeId.eq(employeeId) && x.postId === postId);
  if (!apply) {
    await reply.code(400).send('not found apply');
    return;
  }

  const newInterviewAppointment = new InterviewAppointment();
  newInterviewAppointment.employeeId = apply.employeeId.toNumber();
  newInterviewAppointment.businessId = businessId;
  newInterviewAppointment.applyId = apply.id.toNumber();
  newInterviewAppointment.time = new Date(time);
  newInterviewAppointment.isRead = false;
  const interviewAppointmentResult = await newInterviewAppointment.save();
  const [employeeBlock, businessData] = await Promise.all([
    socketblock.get(employeeId, ERole.EMPLOYEE),
    businessContract.getProfile(apply.businessId),
  ]);
  if (employeeBlock)
    request.io.to(employeeBlock.socketIds).emit('bot_notification', {
      _id: interviewAppointmentResult._id,
      role: ERole.BUSINESS,
      category: EBotCategory.NEW_INTERVIEW,
      content: '',
      time: interviewAppointmentResult.updatedAt,
      metadata: {
        _id: interviewAppointmentResult._id,
        time: new Date(interviewAppointmentResult.time),
        businessImage: businessData.sourceImage,
        businessId: businessData.id.toNumber(),
        businessName: businessData.name,
      },
    });

  await reply.code(201).send(interviewAppointmentResult);
};
