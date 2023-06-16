import fs from 'fs';
import path from 'path';
import { Socket } from 'socket.io';
import { handleBigFive, startBigFive } from './hooks/interview';
type WithTimeoutAck<isSender extends boolean, args extends any[]> = isSender extends true ? [Error, ...args] : args;

interface ClientToServerEvents<isSender extends boolean = false> {
  interview_start: (
    arg: {
      sessionId: number;
    },
    callback?: (data: number, status: boolean) => void,
  ) => void;

  interview_chunk: (
    arg?: {
      data: Blob;
    },
    callback?: (data) => void,
  ) => void;
  interview_stop: (
    arg?: {
      //
    },
    callback?: (data) => void,
  ) => void;

  interview_answer: (
    arg: {
      answer: number;
    },
    callback: (data) => void,
  ) => void;
}

interface ServerToClientEvents<isSender extends boolean = false> {
  interview_introduction_end: (time: number) => void;
  interview_main_end: (time: number) => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

export const interview = (
  socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>,
) => {
  let sessionId: number | undefined = undefined;
  let employeeId: number | undefined = undefined;
  let introductionEndTime: Date | undefined = undefined;
  let mainEndTime: Date | undefined = undefined;
  let introductionTimer: NodeJS.Timeout | undefined = undefined;
  let mainTimer: NodeJS.Timeout | undefined = undefined;
  let tmpFilePath: string | undefined = undefined;
  let destStream: fs.WriteStream | undefined = undefined;
  let destTxtStream: fs.WriteStream | undefined = undefined;

  const introductionDuration = 5000;
  const mainDuration = 900000;

  const interviewIntroduction = () => {
    introductionTimer = setTimeout(function () {
      mainEndTime = new Date(new Date().getTime() + mainDuration);
      socket.emit('interview_introduction_end', mainEndTime!.getTime());
      interviewMain();
    }, introductionDuration);
  };
  const interviewMain = () => {
    socket.on('interview_answer', (args) => {
      destTxtStream?.write(args.answer.toString() + '\n');
    });
    mainTimer = setTimeout(function () {
      socket.removeAllListeners();
      handleStop();
    }, mainDuration);
  };

  const handleStop = () => {
    console.log(sessionId);
    if (sessionId === undefined) return;
    if (employeeId === undefined) return;
    socket.emit('interview_main_end', new Date().getTime());
    destStream?.end(() => {
      console.log('Video was been saved');
    });
    clearTimeout(introductionTimer);
    clearTimeout(mainTimer);
    destTxtStream?.end();
    handleBigFive(sessionId!, employeeId!);
    sessionId = undefined;
    introductionEndTime = undefined;
    mainEndTime = undefined;
    introductionTimer = undefined;
    mainTimer = undefined;
    tmpFilePath = undefined;
    destStream = undefined;
    destTxtStream = undefined;

    console.log('stoped');
  };

  socket.on('interview_start', async (args, callback) => {
    console.log('interview_start' + args.sessionId);
    sessionId = args.sessionId;
    console.log('socket' + socket.id);
    const startedData = await startBigFive(socket.id, sessionId).catch((error) => {
      console.log(error);
      callback?.(0, false);
      socket.disconnect();
      return;
    });
    if (!startedData) return;
    employeeId = startedData.employeeId;
    console.log(startedData);
    tmpFilePath = `./public/interview/${sessionId}/`;

    if (!fs.existsSync(tmpFilePath)) {
      fs.mkdirSync(tmpFilePath);
    }

    destStream = fs.createWriteStream(tmpFilePath + 'video.webm');
    destTxtStream = fs.createWriteStream(tmpFilePath + 'qa.txt', { flags: 'a' });

    socket.on('interview_chunk', (arg) => {
      console.log('introduction_chunk');
      destStream!.write(arg?.data);
    });
    introductionEndTime = new Date(new Date().getTime() + introductionDuration);
    interviewIntroduction();
    callback?.(introductionEndTime.getTime(), true);
  });
  socket.on('disconnect', () => {
    console.log('disconnect');
    handleStop();
  });
};
