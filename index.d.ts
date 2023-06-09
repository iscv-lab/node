import { Socket } from "socket.io";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from './src/socket/types';

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

declare module 'fastify' {
  interface FastifyRequest {
    io: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
  }
}
