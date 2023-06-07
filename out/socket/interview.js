import fs from 'fs';

const interview = (socket) => {
    let interviewId = undefined;
    let introductionTimer = undefined;
    let mainTimer = undefined;
    const interviewIntroduction = () => {
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
        clearTimeout(introductionTimer);
        introductionTimer = undefined;
        clearTimeout(mainTimer);
        introductionTimer = undefined;
    });
};

export { interview };
