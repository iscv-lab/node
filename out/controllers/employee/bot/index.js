import { provider } from '../../../app.js';
import { useBusiness } from '../../../contracts/useBusiness.js';
import { InterviewAppointment } from '../../../models/employee/InterviewAppointment.js';
import { ERole } from '../../../types/index.js';
import { EBotCategory } from '../../../types/messages/bot.js';

const getRecentTask = async (request, reply) => {
    const employeeId = request.params.employeeid;
    const businessContract = useBusiness(provider);
    const [interviewData] = await Promise.all([
        InterviewAppointment.find({
            employeeId: employeeId,
        }, {}, {}),
    ]);
    const pipelineInterview = interviewData.map(async (appointment) => {
        const apply = await businessContract.getApply(appointment.applyId);
        const business = await businessContract.getProfile(apply.businessId.toNumber());
        const temp = {
            _id: appointment._id,
            role: ERole.BUSINESS,
            content: '',
            time: appointment.updatedAt,
            category: EBotCategory.NEW_INTERVIEW,
            isRead: appointment.isRead,
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
    const result = (await Promise.all([...pipelineInterview])).sort((a, b) => b.time.getTime() - a.time.getTime());
    await reply.code(200).send(result);
};

export { getRecentTask };
