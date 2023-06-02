import { provider } from '../../../app.js';
import { useEmployee } from '../../../contracts/useEmployee.js';
import { Messages } from '../../../models/messages/Messages.js';
import { quickSort } from '../../../utils/quickSort.js';

const getRecent = async (request, reply) => {
    const businessId = request.params.businessid;
    const list = await Messages.aggregate([
        {
            $match: {
                businessId: Number(businessId),
            },
        },
        { $sort: { updatedAt: -1 } },
        { $group: { _id: '$employeeId', newest: { $first: '$$ROOT' } } }, // group by name and get the newest document for each group
    ]).exec();
    console.log(list);
    const emplopyeeContract = useEmployee(provider);
    const pipeline = list.map(async (messages) => {
        const emplopyee = await emplopyeeContract.getProfile(messages.newest.employeeId);
        const data = {
            id: emplopyee.id.toNumber(),
            user: emplopyee.user,
            name: emplopyee.name,
            phone: emplopyee.phone,
            professional: emplopyee.professional,
            email: emplopyee.email,
            github: emplopyee.github,
            linkedin: emplopyee.linkedin,
            sourceImage: emplopyee.sourceImage,
            updatedAt: messages.newest.updatedAt,
        };
        return data;
    });
    const rawRecent = await Promise.all(pipeline);
    const result = quickSort(rawRecent, (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    await reply.code(200).send(result);
};

export { getRecent };
