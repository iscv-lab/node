import { provider } from '../../../app.js';
import { useBusiness } from '../../../contracts/useBusiness.js';
import { InterviewAppointment } from '../../../models/employee/InterviewAppointment.js';
import socketblock from '../../../blocks/socketblock.js';
import { ERole } from '../../../types/index.js';
import { EBotCategory } from '../../../types/messages/bot.js';
import { BigFive } from '../../../models/employee/BigFive.js';

const setInterviewAppointment = async (request, reply) => {
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
                fromTime: new Date(interviewAppointmentResult.fromTime),
                toTime: new Date(interviewAppointmentResult.toTime),
                businessImage: businessData.sourceImage,
                businessId: businessData.id.toNumber(),
                businessName: businessData.name,
            },
        });
    await reply.code(201).send(interviewAppointmentResult);
};
const readInterviewAppointment = async (request, reply) => {
    const interviewId = request.query.interview_id;
    const result = await InterviewAppointment.updateOne({ _id: interviewId }, { $set: { isRead: true } });
    await reply.code(200).send(result);
};
const getBigFive = async (request, reply) => {
    const employeeId = request.query.employee_id;
    const bigfive = await BigFive.findOne({
        employeeId: employeeId,
    }, {}, {
        sort: { updatedAt: -1 },
    });
    await reply.code(200).send(bigfive);
};

export { getBigFive, readInterviewAppointment, setInterviewAppointment };
