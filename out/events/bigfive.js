import { ipfs } from '../app.js';
import { useEmployee } from '../contracts/useEmployee.js';
import { getPDF, cleanBigFive } from '../python/bigfive/index.js';
import fs from 'fs';

const listenBigfive = (wsProvider) => {
    const employeeContract = useEmployee(wsProvider);
    employeeContract.on('AddBigFive', async (employeeId, sessionId, cid) => {
        const pdf = await getPDF(sessionId.toNumber()).then((success) => success.data);
        if (!pdf)
            throw 'cannot get pdf';
        const { cid: cidVerify } = await ipfs.add(pdf);
        if (cid !== cidVerify.toString())
            throw 'verify cid fail';
        await Promise.all([cleanBigFive(sessionId.toNumber()), fs.promises.rmdir(`./public/interview/${sessionId}`)]);
    });
};

export { listenBigfive };
