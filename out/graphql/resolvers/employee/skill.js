import { useEmployee } from '../../../contracts/useEmployee.js';

const skill = {
    skillsByEmployee: async (parent, args, contextValue, info) => {
        const employeeId = args.employeeId;
        if (!employeeId)
            return;
        const { provider } = contextValue;
        const employeeContract = useEmployee(provider);
        const skills = await employeeContract.getAllSkill();
        const skill = skills.filter((x) => x.employeeId.eq(employeeId));
        if (!skill)
            return;
        return skill.map((x) => ({
            id: x.id.toNumber(),
            employeeId: x.employeeId.toNumber(),
            title: x.title,
            level: x.level.toNumber(),
        }));
    },
};

export { skill };
