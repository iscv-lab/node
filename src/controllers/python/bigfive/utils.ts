import { app } from '~/app';
import { getPDF } from '~/python/bigfive';
import socketblock from '~blocks/socketblock';
import { BigFiveSession } from '~models/employee/BigFiveSession';
import { ERole } from '~types/index';
import { EBotCategory } from '~types/messages/bot';
import { toCID } from '~utils/ipfs';

export const handleNotification = async (sessionId: string, employeeId: number) => {
  const [employeeblock, pdf] = await Promise.all([
    socketblock.get(employeeId, ERole.EMPLOYEE),
    getPDF(sessionId).then((success) => success.data),
  ]);
  if (!pdf) throw 'cannot get pdf';
  const pdfData = Buffer.from(pdf, 'binary');
  const cid = await toCID(pdfData);
  if (!cid) throw 'not have cid';
  await BigFiveSession.findByIdAndUpdate(sessionId, { $set: { cid } });
  if (employeeblock?.socketIds?.length) {
    app.io.to(employeeblock!.socketIds).emit('bot_notification', {
      _id: sessionId,
      role: ERole.BUSINESS,
      category: EBotCategory.NEW_BIGFIVE_RESULT,
      content: '',
      time: new Date(),
    });
  }
};
