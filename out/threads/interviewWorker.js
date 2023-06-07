import { parentPort, workerData } from 'worker_threads';
import { mongoServer } from '../configs/mongo.js';
import { initDotENV } from '../configs/nodedotenv.js';
import { initRuntime } from '../configs/runtime.js';

const interviewWorker = async (workerData) => {
    initDotENV();
    initRuntime();
    await mongoServer();
    console.log(workerData);
    parentPort.postMessage({ event: 'introduction', data: 'a' });
    parentPort.postMessage({ event: 'main', data: 'b' });
    parentPort.postMessage({ event: 'end', data: 'c' });
};
interviewWorker(workerData);
