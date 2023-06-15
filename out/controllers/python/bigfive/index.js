import { BigFiveSession } from '../../../models/employee/BigFiveSession.js';
import { handleNotification } from './utils.js';

const reciveStarted = async (request, reply) => {
    const result = await BigFiveSession.updateOne({ _id: request.query.session_id }, {
        $set: { started: true },
    });
    await reply.code(200).send(result);
};
const reciveAudio = async (request, reply) => {
    const sessionId = request.query.session_id;
    const result = await BigFiveSession.findByIdAndUpdate(request.query.session_id, { $set: { audio: true } });
    if (result?.video && result.started)
        handleNotification(sessionId, result.employeeId);
    await reply.code(200).send(result);
};
const reciveVideo = async (request, reply) => {
    const sessionId = request.query.session_id;
    const result = await BigFiveSession.findByIdAndUpdate(request.query.session_id, { $set: { video: true } });
    if (result?.audio && result?.started)
        handleNotification(sessionId, result.employeeId);
    await reply.code(200).send(result);
};

export { reciveAudio, reciveStarted, reciveVideo };
