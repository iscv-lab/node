import { provider } from '../../../app.js';
import '../../../socket/hooks/interview.js';
import { useEmployee } from '../../../contracts/useEmployee.js';
import '../../../models/employee/BigFiveSession.js';

const getLastestSessionId = async (request, reply) => {
    const employeeId = request.query.employee_id;
    const employeeContract = useEmployee(provider);
    const bigfives = await employeeContract.getBigFives();
    if (!bigfives) {
        await reply.code(500);
        return;
    }
    let bigfive = undefined;
    for (let i = bigfives.length - 1; i >= 0; i--) {
        if (bigfives.at(i).employeeId.eq(employeeId)) {
            bigfive = bigfives.at(i);
            break;
        }
    }
    if (!bigfive) {
        await reply.code(400).send('not found');
        return;
    }
    const result = bigfive.id.toNumber();
    await reply.code(200).send(result);
};

export { getLastestSessionId };
