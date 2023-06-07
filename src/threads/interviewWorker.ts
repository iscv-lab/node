import { parentPort, workerData } from 'worker_threads';
import { mongoServer } from '~configs/mongo';
import { initDotENV } from '~configs/nodedotenv';
import { initRuntime } from '~configs/runtime';

declare module 'worker_threads' {
  interface MessagePort {
    postMessage(
      value: {
        event: string;
        data: any;
      },
      transferList?: ReadonlyArray<TransferListItem>,
    ): void;
  }
}

const interviewWorker = async (workerData) => {
  initDotENV();
  initRuntime();
  await mongoServer();
  console.log(workerData);
  parentPort!.postMessage({ event: 'introduction', data: 'a' });
  parentPort!.postMessage({ event: 'main', data: 'b' });
  parentPort!.postMessage({ event: 'end', data: 'c' });
};
interviewWorker(workerData);
