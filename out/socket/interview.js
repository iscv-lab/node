import fs from 'fs';
import path from 'path';
import { handleBigFive } from './hooks/interview.js';

const interview = (socket) => {
    let interviewId = undefined;
    let introductionEndTime = undefined;
    let mainEndTime = undefined;
    let introductionTimer = undefined;
    let mainTimer = undefined;
    let tmpFilePath = undefined;
    let destStream = undefined;
    let destTxtStream = undefined;
    const introductionDuration = 90000;
    const mainDuration = 900000;
    const interviewIntroduction = () => {
        introductionTimer = setTimeout(function () {
            mainEndTime = new Date(new Date().getTime() + mainDuration);
            socket.emit('interview_introduction_end', mainEndTime.getTime());
            interviewMain();
        }, introductionDuration);
    };
    const interviewMain = () => {
        socket.on('interview_answer', (args) => {
            console.log(args.answer);
            destTxtStream?.write(args.answer.toString() + '\n');
        });
        mainTimer = setTimeout(function () {
            socket.removeAllListeners();
            handleStop();
        }, mainDuration);
    };
    const handleStop = () => {
        socket.emit('interview_main_end', new Date().getTime());
        destStream?.end(() => {
            console.log('Video was been saved');
        });
        clearTimeout(introductionTimer);
        clearTimeout(mainTimer);
        destTxtStream?.end();
        // interviewId = undefined;
        introductionEndTime = undefined;
        mainEndTime = undefined;
        introductionTimer = undefined;
        mainTimer = undefined;
        tmpFilePath = undefined;
        destStream = undefined;
        destTxtStream = undefined;
        handleBigFive(interviewId);
        console.log('stoped');
    };
    socket.on('interview_start', (args, callback) => {
        console.log('interview_start' + args.interviewId);
        interviewId = args.interviewId;
        tmpFilePath = `./public/interview/${interviewId}/`;
        if (fs.existsSync(tmpFilePath)) {
            // Read the contents of the folder
            const files = fs.readdirSync(tmpFilePath);
            // Iterate over the files and delete each one
            files.forEach((file) => {
                const filePath = path.join(tmpFilePath, file);
                fs.unlinkSync(filePath);
            });
        }
        destStream = fs.createWriteStream(tmpFilePath + 'video.webm');
        destTxtStream = fs.createWriteStream(tmpFilePath + 'qa.txt', { flags: 'a' });
        socket.on('interview_chunk', (arg) => {
            console.log('introduction_chunk');
            destStream.write(arg?.data);
        });
        introductionEndTime = new Date(new Date().getTime() + introductionDuration);
        interviewIntroduction();
        callback?.(introductionEndTime.getTime());
    });
    socket.on('disconnect', () => {
        handleStop();
    });
    socket.on('interview_stop', (args, callback) => {
        handleStop();
    });
};

export { interview };
