import { InterviewAppointment } from '../../../models/employee/InterviewAppointment.js';

const readInterviewAppointment = async (request, reply) => {
    const interviewId = request.query.interview_id;
    const result = await InterviewAppointment.updateOne({ _id: interviewId }, { $set: { isRead: true } });
    await reply.code(200).send(result);
};

export { readInterviewAppointment };
