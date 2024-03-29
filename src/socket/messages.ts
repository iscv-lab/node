import fs from 'fs';
import { Socket } from 'socket.io';
import socketblock from '~blocks/socketblock';
import { Messages } from '~models/messages/Messages';
import { ERole } from '~types/index';
import { IMesssages } from '~types/messages';

type WithTimeoutAck<isSender extends boolean, args extends any[]> = isSender extends true ? [Error, ...args] : args;

interface ClientToServerEvents<isSender extends boolean = false> {
  receive: (
    arg: {
      businessId?: string;
      employeeId?: string;
      content: string;
    },
    callback: (data: IMesssages) => void,
  ) => void;
  hello: (arg: number, callback: (...args: WithTimeoutAck<isSender, [string]>) => void) => void;
}

interface ServerToClientEvents<isSender extends boolean = false> {
  // ...
  noArg: () => void;
  send: (data: IMesssages) => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

export const messages = (socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>) => {
  socket.on('receive', async (args, callback) => {
    const employeeId = Number.isInteger(Number(args.employeeId)) ? Number(args.employeeId) : undefined;
    const businessId = Number.isInteger(Number(args.businessId)) ? Number(args.businessId) : undefined;
    const content = String(args.content);
    // if (!block) return;
    const role =
      (employeeId !== undefined && employeeId !== null && ERole.EMPLOYEE) ||
      (businessId !== undefined && businessId !== null && ERole.BUSINESS);

    switch (role) {
      case ERole.EMPLOYEE:
        const employeeData = await socketblock.find(employeeId!, role);
        const newMessages = new Messages({
          employeeId,
          businessId,
          from: ERole.EMPLOYEE,
          content: content,
        });
        const result = await newMessages.save();
        socket.to(employeeData?.socketIds ?? []).emit('send', {
          _id: result._id,
          employeeId: result.employeeId,
          businessId: result.businessId,
          role: ERole.EMPLOYEE,
          content: result.content,
          time: result.createdAt,
        });
        callback({
          _id: result._id,
          role: ERole.EMPLOYEE,
          content: content,
          time: result.createdAt,
        });
        break;

      case ERole.BUSINESS: {
        const businessData = await socketblock.find(businessId!, role);
        const newMessages = new Messages({
          businessId,
          employeeId,
          from: ERole.BUSINESS,
          content: content,
        });
        const result = await newMessages.save();
        socket.to(businessData?.socketIds ?? []).emit('send', {
          _id: result._id,
          businessId: result.businessId,
          employeeId: result.employeeId,
          role: ERole.EMPLOYEE,
          content: result.content,
          time: result.createdAt,
        });
        callback({
          _id: result._id,
          role: ERole.EMPLOYEE,
          content: content,
          time: result.createdAt,
        });
        break;
      }
    }
  });
};
