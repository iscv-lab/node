import fs from 'fs';
import { Socket } from 'socket.io';

type WithTimeoutAck<isSender extends boolean, args extends any[]> = isSender extends true ? [Error, ...args] : args;

interface ClientToServerEvents<isSender extends boolean = false> {
  interview_start: (
    arg: {
      interviewId: string;
    },
    callback: (data) => void,
  ) => void;
  interview_main_start: (
    arg: {
      //
    },
    callback: (data) => void,
  ) => void;
  interview_main_chunk: (
    arg: {
      data: Blob;
    },
    callback: (data) => void,
  ) => void;
  interview_introduction_start: (
    arg: {
      //
    },
    callback: (introductionTime: Date) => void,
  ) => void;
  interview_introduction_chunk: (
    arg: {
      data: Blob;
    },
    callback: (data) => void,
  ) => void;
  interview_introduction_stop: (
    arg: {
      //
    },
    callback: (data) => void,
  ) => void;
}

interface ServerToClientEvents<isSender extends boolean = false> {
  interview_introduction_end: (time: number) => void;
  // interview_main: (time: number) => void;
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
  let introductionTime: Date | undefined = undefined;
  let mainTime: Date | undefined = undefined;
  let introductionTimer: NodeJS.Timeout | undefined = undefined;
  let mainTimer: NodeJS.Timeout | undefined = undefined;

  const interviewIntroduction = () => {
    introductionTime = new Date();

    const tmpFilePath = `./public/interview/${interviewId}/`;
    if (!fs.existsSync(tmpFilePath)) {
      fs.mkdirSync(tmpFilePath);
    }
    const destStream = fs.createWriteStream(tmpFilePath + 'introduction.webm');
    // socket.on('interview_introduction_start', (args, callback) => {
    //   destStream = fs.createWriteStream(tmpFilePath);
    //   callback(introductionTime!);
    // });
    socket.on('interview_introduction_chunk', (arg) => {
      console.log('introduction_chunk');
      destStream.write(arg.data);
    });
    // socket.on('interview_introduction_stop', () => {
    //   destStream.end(() => {
    //     console.log('Data has been written to the file.');
    //   });
    // });

    introductionTimer = setTimeout(function () {
      destStream.end(() => {
        console.log('Introduction was been saved');
      });
      socket.emit('interview_introduction_end', new Date().getTime());
      interviewMain();
    }, 90000);
  };
  const interviewMain = () => {
    mainTime = new Date();
    const tmpFilePath = `./public/interview/${interviewId}/`;
    if (!fs.existsSync(tmpFilePath)) {
      fs.mkdirSync(tmpFilePath);
    }
    const destStream = fs.createWriteStream(tmpFilePath + 'main.webm');

    socket.on('interview_main_chunk', (arg) => {
      console.log('main_chunk');
      destStream.write(arg.data);
    });
    // socket.on('stop_interview', () => {
    //   destStream.end(() => {
    //     console.log('Data has been written to the file.');
    //   });
    // });
    // socket.emit('interview_main', mainTime.getTime());

    mainTimer = setTimeout(function () {
      destStream.end(() => {
        console.log('Main was been saved');
      });
      interviewEnd();
    }, 900000);
  };
  const interviewEnd = () => {
    socket.removeAllListeners();
    socket.emit('interview_main_end', new Date().getTime());
  };

  socket.on('interview_start', (args, callback) => {
    console.log('interview_start' + args.interviewId);
    interviewId = args.interviewId;
    interviewIntroduction();
    callback(new Date());
  });
  socket.on('disconnect', () => {
    introductionTime = undefined;
    mainTime = undefined;
    clearTimeout(introductionTimer);
    introductionTimer = undefined;
    clearTimeout(mainTimer);
    introductionTimer = undefined;
  });
};
