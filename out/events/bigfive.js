import { provider, ipfs } from '../app.js';
import { useEmployee } from '../contracts/useEmployee.js';
import { getPDF } from '../python/bigfive/index.js';

const listenBigfive = () => {
    const employeeContract = useEmployee(provider);
    employeeContract.on('AddBigFive', async (employeeId, sessionId, cid) => {
        const pdf = await getPDF(sessionId.toNumber()).then((success) => success.data);
        if (!pdf)
            throw 'cannot get pdf';
        const { cid: cidVerify } = await ipfs.add(pdf);
        if (cid !== cidVerify.toString())
            throw 'verify cid fail';
        console.log('upload to ipfs success');
    });
};

export { listenBigfive };
