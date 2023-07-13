import fs from 'fs';
import { startBigFive, handleBigFive } from './hooks/interview.js';

const interview = (socket) => {
    let sessionId = undefined;
    let employeeId = undefined;
    let introductionEndTime = undefined;
    let mainEndTime = undefined;
    let introductionTimer = undefined;
    let mainTimer = undefined;
    let tmpFilePath = undefined;
    let destStream = undefined;
    let destTxtStream = undefined;
    const introductionDuration = 15000;
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
            destTxtStream?.write(args.answer.toString() + '\n');
        });
        mainTimer = setTimeout(function () {
            socket.removeAllListeners();
            handleStop();
        }, mainDuration);
    };
    const handleStop = () => {
        if (sessionId === undefined)
            return;
        if (employeeId === undefined)
            return;
        socket.emit('interview_main_end', new Date().getTime());
        destStream?.end(() => {
            //
        });
        clearTimeout(introductionTimer);
        clearTimeout(mainTimer);
        destTxtStream?.end();
        if (Math.floor(Math.abs(new Date().getTime() - introductionEndTime.getTime()) / (1000 * 60)) > 2)
            handleBigFive(sessionId, employeeId);
        sessionId = undefined;
        introductionEndTime = undefined;
        mainEndTime = undefined;
        introductionTimer = undefined;
        mainTimer = undefined;
        tmpFilePath = undefined;
        destStream = undefined;
        destTxtStream = undefined;
    };
    socket.on('interview_start', async (args, callback) => {
        sessionId = args.sessionId;
        const startedData = await startBigFive(socket.id, sessionId).catch((error) => {
            console.log(error);
            callback?.(0, false);
            socket.disconnect();
            return;
        });
        if (!startedData)
            return;
        employeeId = startedData.employeeId;
        tmpFilePath = `./public/interview/${sessionId}/`;
        if (!fs.existsSync(tmpFilePath)) {
            fs.mkdirSync(tmpFilePath);
        }
        destStream = fs.createWriteStream(tmpFilePath + 'video.webm');
        destTxtStream = fs.createWriteStream(tmpFilePath + 'qa.txt', { flags: 'a' });
        socket.on('interview_chunk', (arg) => {
            destStream.write(arg?.data);
        });
        introductionEndTime = new Date(new Date().getTime() + introductionDuration);
        interviewIntroduction();
        callback?.(introductionEndTime.getTime(), true);
    });
    socket.on('disconnect', () => {
        handleStop();
    });
};

export { interview };
