import { BigFive } from '../../../models/employee/BigFive.js';

const readBigFive = async (request, reply) => {
    const bigfiveId = request.query.bigfive_id;
    const result = await BigFive.findByIdAndUpdate(bigfiveId, { $set: { isRead: true } });
    await reply.code(200).send(result);
};

export { readBigFive };
