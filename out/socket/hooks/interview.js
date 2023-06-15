import { startedBigFive } from '../../python/bigfive/index.js';
import '../../models/employee/BigFiveSession.js';

const handleBigFive = async (sessionId) => {
    await startedBigFive(sessionId).then((success) => {
        console.log(success);
    });
};
var EInterviewError;
(function (EInterviewError) {
    EInterviewError[EInterviewError["TOO_SHORT_TIME"] = 0] = "TOO_SHORT_TIME";
})(EInterviewError || (EInterviewError = {}));

export { EInterviewError, handleBigFive };
