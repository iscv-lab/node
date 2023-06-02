import { provider } from '../../../app.js';
import { useEmployee } from '../../../contracts/useEmployee.js';

const getEmployee = async (request, reply) => {
    const employeeId = request.params.employeeid;
    const employeeContract = useEmployee(provider);
    return await employeeContract.getProfile(employeeId).then((data) => ({
        ...data,
        id: data.id.toNumber(),
    }));
};

export { getEmployee };
