import { Contract40Steps } from '~models/ont/Contract40Steps';
import { IPoc } from '~models/poc/Poc';
import { IStatus } from '~models/poc/Status';

export const handleColor = async (listCat: IStatus[], value: IPoc) => {
  if (!value.catPOCStatus) return undefined;
  const handlePendingOrange = () => {
    const listCatEqual = listCat.filter((x) => x.manageTypeRPPM === 'pending').map((x) => x.value);
    if (listCatEqual.includes(value.catPOCStatus!)) {
      return {
        color: 'orange',
      };
    }
    return undefined;
  };

  const handleRejectRed = async () => {
    const listCatEqual = listCat.filter((x) => x.manageTypeRPPM === 'drop40').map((x) => x.value);
    if (listCatEqual.includes(value.catPOCStatus!)) {
      const [contract40Data] = await Promise.all([Contract40Steps.findOne({ pocId: value.pocId })]);
      if (!contract40Data) throw 'Không tìm thấy thông tin hợp đồng.';
      return {
        color: 'red',
        note: contract40Data.ppmhoRejectionNote ?? contract40Data.rppmRejectionNote,
      };
    }
    return undefined;
  };

  const handleApproveGreen = () => {
    const listCatEqual = listCat.filter((x) => x.manageTypeRPPM === 'approved40').map((x) => x.value);
    if (listCatEqual.includes(value.catPOCStatus!)) {
      return {
        color: 'green',
      };
    }
    return undefined;
  };

  const checkOrange = handlePendingOrange();
  if (checkOrange) {
    return checkOrange.color;
  }
  const checkRed = await handleRejectRed();
  if (checkRed) {
    return checkRed.color;
  }
  const checkGreen = handleApproveGreen();
  if (checkGreen) return checkGreen.color;
};
