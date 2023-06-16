import { provider } from '../../app.js';
import { startedBigFive } from '../../python/bigfive/index.js';
import { useEmployee } from '../../contracts/useEmployee.js';
import { BigFiveSession } from '../../models/employee/BigFiveSession.js';
import socketblock from '../../blocks/socketblock.js';

const handleBigFive = async (sessionId, employeeId) => {
    const employeeContract = useEmployee(provider);
    console.log(sessionId + ':' + employeeId);
    const bigfiveSession = await employeeContract.getBigFive(sessionId);
    if (!bigfiveSession.employeeId.eq(employeeId)) {
        console.log('employeeId not belongs to bigfive session');
        return;
    }
    await startedBigFive(sessionId).then((success) => {
        console.log(success);
    });
};
var EInterviewError;
(function (EInterviewError) {
    EInterviewError[EInterviewError["TOO_SHORT_TIME"] = 0] = "TOO_SHORT_TIME";
})(EInterviewError || (EInterviewError = {}));
const startBigFive = async (socketId, sessionId) => {
    const employeeId = await socketblock.findUserIdBySocket(socketId);
    console.log('employeeId' + employeeId);
    if (employeeId === undefined)
        throw 'not found socket block';
    console.log('first');
    const newBigFiveSession = new BigFiveSession({
        employeeId,
        sessionId,
    });
    await newBigFiveSession.save();
    return {
        employeeId,
    };
};

export { EInterviewError, handleBigFive, startBigFive };
