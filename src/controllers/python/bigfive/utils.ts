import { v4 } from 'uuid';
import { app, provider } from '~/app';
import { getPDF, reportBigFive } from '~/python/bigfive';
import socketblock from '~blocks/socketblock';
import { useEmployee } from '~contracts/useEmployee';
import { BigFiveSession } from '~models/employee/BigFiveSession';
import { ERole } from '~types/index';
import { EBotCategory } from '~types/messages/bot';
import { toCID } from '~utils/ipfs';

export const handleNotification = async (sessionId: number, employeeId: number) => {
  console.log("start report")
  const contractEmployee = useEmployee(provider);
  const [employeeblock, employee, bigfive] = await Promise.all([
    socketblock.get(employeeId, ERole.EMPLOYEE),
    contractEmployee.getProfile(employeeId),
    BigFiveSession.findOne({ sessionId }),
  ]);
  if (!employee) throw 'employee not found';
  const reportResult = await reportBigFive({
    employeeId,
    sessionId,
    employeeName: employee.name,
    bigfive: {
      o: Math.round((bigfive!.audioResult!.o + bigfive!.audioResult!.o) / 2),
      c: Math.round((bigfive!.audioResult!.c + bigfive!.audioResult!.c) / 2),
      e: Math.round((bigfive!.audioResult!.e + bigfive!.audioResult!.e) / 2),
      a: Math.round((bigfive!.audioResult!.a + bigfive!.audioResult!.a) / 2),
      n: Math.round((bigfive!.audioResult!.n + bigfive!.audioResult!.n) / 2),
    },
  }).then((success) => success.data);
  if (!(reportResult === 'success')) throw 'report error';
  const pdf = await getPDF(sessionId).then((success) => success.data);
  if (!pdf) throw 'cannot get pdf';
  const cid = await toCID(pdf as Buffer);
  if (!cid) throw 'not have cid';
  await BigFiveSession.updateOne({ sessionId }, { $set: { cid } });
  if (employeeblock?.socketIds?.length) {
    app.io.to(employeeblock!.socketIds).emit('bot_notification', {
      _id: v4(),
      sessionId: sessionId,
      role: ERole.BUSINESS,
      category: EBotCategory.NEW_BIGFIVE_RESULT,
      content: '',
      time: new Date(),
    });
  }
};
