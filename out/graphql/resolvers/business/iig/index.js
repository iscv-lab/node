import { IIGRequest, ERequestStatus } from '../../../../models/business/iig/IIGRequest.js';
import { EIIGRequest } from '../../../../types/business/iig/index.js';

const iig = {
    requestStatus: async (parent, args, contextValue, info) => {
        const employeeId = args.employeeId;
        const [hasLR, hasSW] = await Promise.all([
            IIGRequest.exists({
                employeeId: employeeId,
                certificateType: EIIGRequest.LR,
                state: ERequestStatus.WAITING,
            }),
            IIGRequest.exists({
                employeeId: employeeId,
                certificateType: EIIGRequest.SW,
                state: ERequestStatus.WAITING,
            }),
        ]);
        return {
            lr: Boolean(hasLR?._id),
            sw: Boolean(hasSW?._id),
        };
    },
};

export { iig };
