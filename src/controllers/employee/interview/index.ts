import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useBusiness } from '~contracts/useBusiness';
import { InterviewAppointment } from '~models/employee/InterviewAppoint';

export const setInterviewAppointment = async (
  request: FastifyRequest<{ Body: { employeeId: number; postId: string } }>,
  reply: FastifyReply,
) => {
  const employeeId = request.body.employeeId;
  const postId = request.body.postId;

  const businessContract = useBusiness(provider);

  const [appliesData] = await Promise.all([businessContract.getAllApplies()]);

  const apply = appliesData.find((x) => x.employeeId.eq(employeeId) && x.postId === postId);
  if (!apply) {
    await reply.code(400).send('not found apply');
    return;
  }

  const newInterviewAppointment = new InterviewAppointment();
  newInterviewAppointment.employeeId = apply.employeeId.toNumber();
  newInterviewAppointment.applyId = apply.id.toNumber();
  newInterviewAppointment.fromTime = new Date();
  newInterviewAppointment.toTime = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  const interviewAppointmentResult = await newInterviewAppointment.save();
  await reply.code(201).send(interviewAppointmentResult);
};
