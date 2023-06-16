import { provider } from '~/app';
import { startedBigFive } from '~/python/bigfive';
import { useEmployee } from '~contracts/useEmployee';
import { BigFiveSession } from '~models/employee/BigFiveSession';
import socketblock from '~blocks/socketblock';
export const handleBigFive = async (sessionId: number, employeeId: number) => {
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

export enum EInterviewError {
  TOO_SHORT_TIME,
}

export const startBigFive = async (socketId: string, sessionId: number) => {
  const employeeId = await socketblock.findUserIdBySocket(socketId);
  console.log('employeeId' + employeeId);
  if (employeeId === undefined) throw 'not found socket block';
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
