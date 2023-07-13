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
    const data = request.body;
    const result = await BigFiveSession.findOneAndUpdate({ sessionId }, { $set: { audio: true, audioResult: data } });
    if (result?.video && result.started)
        handleNotification(sessionId, result.employeeId).catch((error) => console.log(error));
    await reply.code(200).send('result');
};
const reciveVideo = async (request, reply) => {
    const sessionId = request.query.session_id;
    const data = request.body;
    const result = await BigFiveSession.findOneAndUpdate({ sessionId }, { $set: { video: true, videoResult: data } });
    if (result?.audio && result?.started)
        handleNotification(sessionId, result.employeeId).catch((error) => console.log(error));
    await reply.code(200).send('result');
};

export { reciveAudio, reciveStarted, reciveVideo };
