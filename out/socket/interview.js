import fs from 'fs';
import { SpeechClient } from '@google-cloud/speech';

new SpeechClient({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});
const interview = (socket) => {
    let interviewId = undefined;
    let introductionEndTime = undefined;
    let mainEndTime = undefined;
    let introductionTimer = undefined;
    let mainTimer = undefined;
    let tmpFilePath = undefined;
    let destStream = undefined;
    const introductionDuration = 4000;
    const mainDuration = 900000;
    // let destAudioStream: any = undefined;
    const interviewIntroduction = () => {
        introductionTimer = setTimeout(function () {
            destStream?.end(() => {
                console.log('Introduction was been saved');
            });
            mainEndTime = new Date(new Date().getTime() + mainDuration);
            socket.emit('interview_introduction_end', mainEndTime.getTime());
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
            destStream.write(arg.data);
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

export { interview };
