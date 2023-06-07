import fs from 'fs';
import { Socket } from 'socket.io';
import { Buffer } from 'buffer';
import { SpeechClient } from '@google-cloud/speech';
import { Lame } from 'node-lame';

const speechClient = new SpeechClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

type WithTimeoutAck<isSender extends boolean, args extends any[]> = isSender extends true ? [Error, ...args] : args;

interface ClientToServerEvents<isSender extends boolean = false> {
  interview_start: (
    arg: {
      interviewId: string;
    },
    callback: (data: any) => void,
  ) => void;

  interview_chunk: (
    arg: {
      data: Blob;
    },
    callback: (data) => void,
  ) => void;
  interview_stop: (
    arg: {
      //
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
  let interviewId: string | undefined = undefined;
  let introductionEndTime: Date | undefined = undefined;
  let mainEndTime: Date | undefined = undefined;
  let introductionTimer: NodeJS.Timeout | undefined = undefined;
  let mainTimer: NodeJS.Timeout | undefined = undefined;
  let tmpFilePath: string | undefined = undefined;
  let destStream: fs.WriteStream | undefined = undefined;

  const introductionDuration = 4000;
  const mainDuration = 900000;
  // let destAudioStream: any = undefined;
  const interviewIntroduction = () => {
    introductionTimer = setTimeout(function () {
      destStream?.end(() => {
        console.log('Introduction was been saved');
      });
      mainEndTime = new Date(new Date().getTime() + mainDuration);
      socket.emit('interview_introduction_end', mainEndTime!.getTime());
      interviewMain();
    }, introductionDuration);
  };
  const interviewMain = () => {
    mainTimer = setTimeout(function () {
      socket.removeAllListeners();
      handleStop();
    }, mainDuration);
  };

  const handleStop = () => {
    socket.emit('interview_main_end', new Date().getTime());
    interviewId = undefined;
    introductionEndTime = undefined;
    mainEndTime = undefined;
    clearTimeout(introductionTimer);
    introductionTimer = undefined;
    clearTimeout(mainTimer);
    mainTimer = undefined;
    tmpFilePath = undefined;
    destStream?.end();
    destStream = undefined;

    console.log('stoped');
  };

  socket.on('interview_start', (args, callback) => {
    console.log('interview_start' + args.interviewId);
    introductionEndTime = new Date(new Date().getTime() + introductionDuration);
    interviewId = args.interviewId;
    tmpFilePath = `./public/interview/${interviewId}/`;
    destStream = fs.createWriteStream(tmpFilePath + 'video.webm');
    // destAudioStream = fs.createWriteStream(tmpFilePath + 'audio.wav');
    // if (!fs.existsSync(tmpFilePath)) {
    //   fs.mkdirSync(tmpFilePath);
    // }
    socket.on('interview_chunk', (arg) => {
      console.log('introduction_chunk');
      destStream!.write(arg.data);
      // destAudioStream.write(arg.data);
    });

    interviewIntroduction();
    callback(introductionEndTime.getTime());
  });
  socket.on('disconnect', () => {
    handleStop();
  });

  socket.on('interview_stop', (args, callback) => {
    handleStop();
  });
};
