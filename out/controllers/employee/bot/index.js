import { v4 } from 'uuid';
import { provider } from '../../../app.js';
import { useBusiness } from '../../../contracts/useBusiness.js';
import { BigFiveSession } from '../../../models/employee/BigFiveSession.js';
import { InterviewAppointment } from '../../../models/employee/InterviewAppointment.js';
import { ERole } from '../../../types/index.js';
import { EBotCategory } from '../../../types/messages/bot.js';

const getRecentTask = async (request, reply) => {
    const employeeId = request.params.employeeid;
    console.log(employeeId);
    const businessContract = useBusiness(provider);
    const [interviewData, bigFiveData] = await Promise.all([
        InterviewAppointment.find({
            employeeId: employeeId,
        }, {}, {}),
        BigFiveSession.find({ cid: { $exists: true }, employeeId }, {}, { sort: { updatedAt: 1 } }),
    ]);
    const pipelineInterview = interviewData.map(async (appointment) => {
        const apply = await businessContract.getApply(appointment.applyId).catch((error) => {
            console.log(error);
        });
        if (!apply)
            return;
        const business = await businessContract.getProfile(apply.businessId.toNumber()).catch((error) => {
            console.log(error);
        });
        const temp = {
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
        const temp = {
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
        .sort((a, b) => b.time.getTime() - a.time.getTime());
    await reply.code(200).send(result);
};

export { getRecentTask };
