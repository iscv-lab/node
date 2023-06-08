import fs from 'fs';
import path from 'path';
import { provider, app } from '../app.js';
import { bigFive } from '../pythonService/interview/index.js';
import { useEmployee } from '../contracts/useEmployee.js';
import { InterviewAppointment } from '../models/employee/InterviewAppointment.js';
import socketblock from '../blocks/socketblock.js';
import { ERole } from '../types/index.js';

const interview = (socket) => {
    let interviewId = undefined;
    let introductionEndTime = undefined;
    let mainEndTime = undefined;
    let introductionTimer = undefined;
    let mainTimer = undefined;
    let tmpFilePath = undefined;
    let destStream = undefined;
    let destTxtStream = undefined;
    const introductionDuration = 4000;
    const mainDuration = 900000;
    // let destAudioStream: any = undefined;
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
        handleBigFive();
        console.log('stoped');
    };
    const handleBigFive = async () => {
        const interviewAppointmentData = await InterviewAppointment.findById(interviewId);
        if (!interviewAppointmentData)
            return;
        const contractEmployee = useEmployee(provider);
        const employee = await contractEmployee.getProfile(interviewAppointmentData.employeeId);
        await bigFive(employee.id.toNumber(), employee.name, interviewId)
            .then(async (success) => {
            interviewAppointmentData.isResult = true;
            const [, block] = await Promise.all([
                interviewAppointmentData.updateOne(interviewAppointmentData),
                socketblock.get(employee.id.toNumber(), ERole.EMPLOYEE),
            ]);
            app.io.to(block.socketIds).emit('interview_result');
        })
            .catch((error) => console.log(error));
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
