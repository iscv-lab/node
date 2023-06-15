import { startedBigFive } from '~/python/bigfive';
import { BigFiveSession } from '~models/employee/BigFiveSession';

export const handleBigFive = async (sessionId: string) => {
  await startedBigFive(sessionId).then((success) => {
    console.log(success);
  });
};

export enum EInterviewError {
  TOO_SHORT_TIME,
}

export const startBigFive = async (employeeId: string) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const recent = await BigFiveSession.exists({ employeeId, createdAt: { $gte: sevenDaysAgo } });
  if (recent?._id) throw EInterviewError.TOO_SHORT_TIME;
  const newBigFiveSession = new BigFiveSession({
    employeeId,
  });
  const bigfiveSession = await newBigFiveSession.save();
  return bigfiveSession._id;
};
