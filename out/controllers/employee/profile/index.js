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
const searchEmployees = async (request, reply) => {
    const search = request.query.search;
    const employeeContract = useEmployee(provider);
    const employees = await employeeContract.getAllProfile();
    const filtered = employees.filter((x) => x.name
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .includes(search.normalize('NFD').replace(/\p{Diacritic}/gu, '')));
    const result = filtered.map((x) => ({
        id: x.id.toNumber(),
        user: x.user,
        name: x.name,
        sourceImage: x.sourceImage,
    }));
    await reply.code(200).send(result);
};

export { getEmployee, searchEmployees };
