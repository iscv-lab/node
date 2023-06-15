import { startedBigFive } from '../../python/bigfive/index.js';

const handleBigFive = async (sessionId) => {
    await startedBigFive(sessionId).then((success) => {
        console.log(success);
    });
};
var EInterviewError;
(function (EInterviewError) {
    EInterviewError[EInterviewError["TOO_SHORT_TIME"] = 0] = "TOO_SHORT_TIME";
})(EInterviewError || (EInterviewError = {}));
// export const startBigFive = async (employeeId: string) => {
//   const sevenDaysAgo = new Date();
//   sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
//   const recent = await BigFiveSession.exists({ employeeId, createdAt: { $gte: sevenDaysAgo } });
//   if (recent?._id) throw EInterviewError.TOO_SHORT_TIME;
//   const newBigFiveSession = new BigFiveSession({
//     employeeId,
//   });
//   const bigfiveSession = await newBigFiveSession.save();
//   return bigfiveSession._id;
// };

export { EInterviewError, handleBigFive };
