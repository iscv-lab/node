import { useEmployee } from '../../../contracts/useEmployee.js';

const bigfive = {
    bigFiveEmployee: async (parent, args, contextValue, info) => {
        const employeeId = args.employeeId;
        if (employeeId === -1)
            return;
        if (employeeId === undefined || employeeId === null)
            return;
        const employeeContract = useEmployee(contextValue.provider);
        const bigfives = await employeeContract.getBigFives();
        for (let i = bigfives.length - 1; i >= 0; i--) {
            const item = bigfives.at(i);
            if (item?.employeeId.eq(employeeId) && item.cid)
                return {
                    id: item.id.toNumber(),
                    employeeId: item.employeeId.toNumber(),
                    startTime: item.startTime.toNumber(),
                    endTime: item.endTime.toNumber(),
                    cid: item.cid,
                };
        }
        return;
    },
};

export { bigfive };
