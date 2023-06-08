import { ERole } from '~types/index';
import { IMesssages } from '~types/messages';
import { IBotMessages } from '~types/messages/bot';

type WithTimeoutAck<isSender extends boolean, args extends any[]> = isSender extends true ? [Error, ...args] : args;

export interface ClientToServerEvents<isSender extends boolean = false> {
  receive: (
    arg: {
      businessId?: number;
      employeeId?: number;
      content: string;
    },
    callback: (data: IMesssages) => void,
  ) => void;
  hello: (arg: number, callback: (...args: WithTimeoutAck<isSender, [string]>) => void) => void;
}

export interface ServerToClientEvents<isSender extends boolean = false> {
  noArg: () => void;
  send: (data: { _id: string; employeeId?: number; businessId?: number; content: string; role: ERole }) => void;
  bot_notification: (data: IBotMessages) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}
