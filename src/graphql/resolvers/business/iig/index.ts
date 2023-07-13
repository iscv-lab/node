import { Context } from '~graphql/context';
import { ERequestStatus, IIGRequest } from '~models/business/iig/IIGRequest';
import { EIIGRequest } from '~types/business/iig';

export const iig = {
  requestStatus: async (parent, args: { employeeId: number }, contextValue: Context, info) => {
    const employeeId = args.employeeId;

    if (employeeId === -1) return;

    const [hasLR, hasSW] = await Promise.all([
      IIGRequest.exists({
        employeeId: employeeId,
        certificateType: EIIGRequest.LR,
        status: ERequestStatus.WAITING,
      }),

      IIGRequest.exists({
        employeeId: employeeId,
        certificateType: EIIGRequest.SW,
        status: ERequestStatus.WAITING,
      }),
    ]); 
    return {
      lr: Boolean(hasLR?._id),
      sw: Boolean(hasSW?._id),
    };
  },
};
