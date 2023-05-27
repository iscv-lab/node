import { Worker } from 'worker_threads';

export const threadWaiter = <T>(name: string, workerData?: any): any => {
  return new Promise<T>((resolve, reject) => {
    const workerPath = `${process.env.NODE_ENV === 'development' ? './out/threads/' : './dist/'}${name}.js`;

    const worker = new Worker(workerPath, { workerData });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`stopped with  ${code} exit code`));
    });
  });
};
