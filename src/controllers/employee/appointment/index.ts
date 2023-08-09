import { FastifyReply, FastifyRequest } from 'fastify';
import { InterviewAppointment } from '~models/employee/InterviewAppointment';

export const readInterviewAppointment = async (
  request: FastifyRequest<{
    Querystring: {
      interview_id: string;
    };
  }>,
  reply: FastifyReply,
) => {
  const interviewId = request.query.interview_id;
  const result = await InterviewAppointment.updateOne({ _id: interviewId }, { $set: { isRead: true } });
  await reply.code(200).send(result);
};
