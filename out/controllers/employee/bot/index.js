import { provider } from '../../../app.js';
import { useBusiness } from '../../../contracts/useBusiness.js';
import { InterviewAppointment } from '../../../models/employee/InterviewAppointment.js';
import { ERole } from '../../../types/index.js';
import { EBotCategory } from '../../../types/messages/bot.js';

const getRecentTask = async (request, reply) => {
    const employeeId = request.params.employeeid;
    const businessContract = useBusiness(provider);
    const data = await InterviewAppointment.find({
        employeeId: employeeId,
    }, {}, {});
    const pipeline = data.map(async (appointment) => {
        const apply = await businessContract.getApply(appointment.applyId);
        const business = await businessContract.getProfile(apply.businessId.toNumber());
        const temp = {
            _id: appointment._id,
            role: ERole.BUSINESS,
            content: '',
            time: appointment.updatedAt,
            category: EBotCategory.NEW_INTERVIEW,
            isRead: appointment.isRead,
            isResult: appointment.isResult,
            isReadResult: appointment.isReadResult,
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

export { getRecentTask };
