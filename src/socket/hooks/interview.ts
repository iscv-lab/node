import { provider } from '~/app';
import { startedBigFive } from '~/python/bigfive';
import { useEmployee } from '~contracts/useEmployee';
import { BigFiveSession } from '~models/employee/BigFiveSession';
import socketblock from '~blocks/socketblock';
export const handleBigFive = async (sessionId: number, employeeId: number) => {
  console.log('start bigfive');
  const employeeContract = useEmployee(provider);
  const bigfiveSession = await employeeContract.getBigFive(sessionId);
  if (!bigfiveSession.employeeId.eq(employeeId)) {
    console.log('employeeId not belongs to bigfive session');
    return;
  }
  await startedBigFive(sessionId).catch((error) => console.log(error));
};

export enum EInterviewError {
  TOO_SHORT_TIME,
}

export const startBigFive = async (socketId: string, sessionId: number) => {
  const employeeId = await socketblock.findUserIdBySocket(socketId);
  if (employeeId === undefined) throw 'not found socket block';
  const newBigFiveSession = new BigFiveSession({
    employeeId,
    sessionId,
  });
  await newBigFiveSession.save();
  return {
    employeeId,
  };
};
