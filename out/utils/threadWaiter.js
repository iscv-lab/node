import { Worker } from 'worker_threads';

/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
const threadWaiter = (name, workerData, events, workerCallback) => {
    return new Promise((resolve, reject) => {
        const workerPath = `${process.env.NODE_ENV === 'development' ? './out/threads/' : './dist/'}${name}.js`;
        const worker = new Worker(workerPath, { workerData });
        workerCallback?.(worker);
        worker.on('message', ({ event, data }) => {
            events?.[event]?.(data);
        });
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`stopped with  ${code} exit code`));
            else
                resolve(code);
        });
    });
};

export { threadWaiter };
