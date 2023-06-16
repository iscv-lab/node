import { BigFiveSession } from '../../../models/employee/BigFiveSession.js';
import { handleNotification } from './utils.js';
import { audioBigFive, videoBigFive } from '../../../python/bigfive/index.js';

const reciveStarted = async (request, reply) => {
    const sessionId = request.query.session_id;
    await BigFiveSession.updateOne({ sessionId }, {
        $set: { started: true },
    });
    await reply.code(200).send('result');
    audioBigFive(sessionId);
    videoBigFive(sessionId);
};
const reciveAudio = async (request, reply) => {
    const sessionId = request.query.session_id;
    const result = await BigFiveSession.findOneAndUpdate({ sessionId }, { $set: { audio: true } });
    if (result?.video && result.started)
        handleNotification(sessionId, result.employeeId);
    await reply.code(200).send(result);
};
const reciveVideo = async (request, reply) => {
    const sessionId = request.query.session_id;
    const result = await BigFiveSession.findOneAndUpdate({ sessionId }, { $set: { video: true } });
    if (result?.audio && result?.started)
        handleNotification(sessionId, result.employeeId);
    await reply.code(200).send(result);
};

export { reciveAudio, reciveStarted, reciveVideo };
