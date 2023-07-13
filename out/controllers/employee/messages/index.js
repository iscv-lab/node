import { provider } from '../../../app.js';
import { useBusiness } from '../../../contracts/useBusiness.js';
import { Messages } from '../../../models/messages/Messages.js';
import { quickSort } from '../../../utils/quickSort.js';

const getRecent = async (request, reply) => {
    const employeeId = request.params.employeeid;
    const list = await Messages.aggregate([
        {
            $match: {
                employeeId: Number(employeeId),
            },
        },
        { $sort: { updatedAt: -1 } },
        { $group: { _id: '$businessId', newest: { $first: '$$ROOT' } } }, // group by name and get the newest document for each group
    ]).exec();
    const businessContract = useBusiness(provider);
    const pipeline = list.map(async (messages) => {
        const business = await businessContract.getProfile(messages.newest.businessId).catch((error) => console.log(error));
        if (!business)
            return;
        const data = {
            id: business.id.toNumber(),
            user: business.user,
            name: business.name,
            phone: business.phone,
            professional: business.professional,
            email: business.email,
            github: business.github,
            linkedin: business.linkedin,
            sourceImage: business.sourceImage,
            updatedAt: messages.newest.updatedAt,
            category: business.category,
        };
        return data;
    });
    const rawRecent = (await Promise.all(pipeline)).filter((x) => Boolean(x));
    const result = quickSort(rawRecent, (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    await reply.code(200).send(result);
};
const getHistory = async (request, reply) => {
    const employeeId = request.params.employee_id;
    const businessId = request.query.business_id;
    const histories = await Messages.find({ employeeId, businessId }, {}, { sort: { updatedAt: 1 } });
    const result = histories.map((x) => ({
        ...x.toObject(),
        time: x.createdAt,
        role: x.from
    }));
    await reply.code(200).send(result);
};

export { getHistory, getRecent };
