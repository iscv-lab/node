import { BigNumber } from 'ethers';
import { ipfs, provider } from '~/app';
import { useEmployee } from '~contracts/useEmployee';
import { getPDF } from '~python/bigfive';
import fs from 'fs';
export const listenBigfive = () => {
  const employeeContract = useEmployee(provider);
  employeeContract.on('AddBigFive', async (employeeId: BigNumber, sessionId: BigNumber, cid: string) => {
    const pdf = await getPDF(sessionId.toNumber()).then((success) => success.data);
    if (!pdf) throw 'cannot get pdf';
    const { cid: cidVerify } = await ipfs.add(pdf);
    if (cid !== cidVerify.toString()) throw 'verify cid fail';
    console.log('upload to ipfs success');
  });
};
