import { app } from '../../../app.js';
import { getPDF } from '../../../python/bigfive/index.js';
import socketblock from '../../../blocks/socketblock.js';
import { BigFiveSession } from '../../../models/employee/BigFiveSession.js';
import { ERole } from '../../../types/index.js';
import { EBotCategory } from '../../../types/messages/bot.js';
import { toCID } from '../../../utils/ipfs.js';

const handleNotification = async (sessionId, employeeId) => {
    const [employeeblock, pdf] = await Promise.all([
        socketblock.get(employeeId, ERole.EMPLOYEE),
        getPDF(sessionId).then((success) => success.data),
    ]);
    if (!pdf)
        throw 'cannot get pdf';
    const pdfData = Buffer.from(pdf, 'binary');
    const cid = await toCID(pdfData);
    if (!cid)
        throw 'not have cid';
    await BigFiveSession.findByIdAndUpdate(sessionId, { $set: { cid } });
    if (employeeblock?.socketIds?.length) {
        app.io.to(employeeblock.socketIds).emit('bot_notification', {
            _id: sessionId,
            role: ERole.BUSINESS,
            category: EBotCategory.NEW_BIGFIVE_RESULT,
            content: '',
            time: new Date(),
        });
    }
};

export { handleNotification };
