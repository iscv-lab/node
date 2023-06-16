import { provider, app } from '../../../app.js';
import { reportBigFive, getPDF } from '../../../python/bigfive/index.js';
import socketblock from '../../../blocks/socketblock.js';
import { useEmployee } from '../../../contracts/useEmployee.js';
import { BigFiveSession } from '../../../models/employee/BigFiveSession.js';
import { ERole } from '../../../types/index.js';
import { EBotCategory } from '../../../types/messages/bot.js';
import { toCID } from '../../../utils/ipfs.js';

const handleNotification = async (sessionId, employeeId) => {
    const contractEmployee = useEmployee(provider);
    const [employeeblock, employee] = await Promise.all([
        socketblock.get(employeeId, ERole.EMPLOYEE),
        contractEmployee.getProfile(employeeId),
    ]);
    if (!employee)
        throw 'employee not found';
    const reportResult = await reportBigFive(sessionId, employee.name, employeeId).then((success) => success.data);
    if (!(reportResult === 'success'))
        throw 'report error';
    const pdf = await getPDF(sessionId).then((success) => success.data);
    if (!pdf)
        throw 'cannot get pdf';
    const pdfData = Buffer.from(pdf, 'binary');
    const cid = await toCID(pdfData);
    if (!cid)
        throw 'not have cid';
    await BigFiveSession.updateOne({ sessionId }, { $set: { cid } });
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
