import { BigNumber, ethers } from 'ethers';
import { ipfs } from '~/app';
import { useEmployee } from '~contracts/useEmployee';
import { cleanBigFive, getPDF } from '~python/bigfive';
import fs from 'fs';
import { BigFiveSession } from '~models/employee/BigFiveSession';

export const listenBigfive = (wsProvider: ethers.providers.WebSocketProvider) => {
  const employeeContract = useEmployee(wsProvider);
  employeeContract.on('AddBigFive', async (employeeId: BigNumber, sessionId: BigNumber, cid: string) => {
    try {
      console.log('listen confirm big five: ' + sessionId);
      const pdf = await getPDF(sessionId.toNumber())
        .then((success) => success.data)
        .catch((error) => console.log(error));
      if (!pdf) throw 'cannot get pdf';
      const { cid: cidVerify } = await ipfs.add(pdf);
      if (cid !== cidVerify.toString()) throw 'verify cid fail';
      await Promise.allSettled([
        cleanBigFive(sessionId.toNumber()),
        BigFiveSession.updateOne({ sessionId }, { $set: { isRead: true } }),
        (async () => {
          if (fs.existsSync(`./public/interview/${sessionId}`)) {
            await fs.promises
              .rmdir(`./public/interview/${sessionId}`, { recursive: true })
              .catch((error) => console.log(error));
          }
        })(),
      ]);
    } catch (error) {
      console.log(error);
    }
  });
};
