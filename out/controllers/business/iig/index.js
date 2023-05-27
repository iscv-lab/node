import { provider } from '../../../app.js';
import { useIIG } from '../../../contracts/iig/useIIG.js';

const getListLR = async (request, reply) => {
    const iigContract = useIIG(provider);
    const listLR = (await iigContract.getAllIIGLRResult()).map((lr) => {
        return {
            id: lr.id.toNumber(),
            employeeId: lr.employeeId.toNumber(),
            testDate: lr.testDate.toNumber(),
            shiftTest: lr.shiftTest,
            expireDate: lr.expireDate.toNumber(),
            listeningScore: lr.listeningScore.toNumber(),
            readingScore: lr.readingScore.toNumber(),
            time: lr.time.toNumber(),
        };
    });
    await reply.code(200).send(listLR.reverse());
};

export { getListLR };
