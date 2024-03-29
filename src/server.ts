import cluster from 'cluster';
import 'express-async-errors';
import { initDotENV } from '~configs/nodedotenv';
import { initRuntime } from '~configs/runtime';
import { startInstance } from './app';

initDotENV();
initRuntime();
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < process.env.NUM_CLUSTER; i++) {
    cluster.fork();
  }
  // await startInstance();

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  await startInstance();
}
