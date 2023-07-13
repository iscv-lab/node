import AxiosServices from '../axiosServices.js';

const startedBigFive = (sessionId) => {
    return new AxiosServices().get(`big_five/start?session_id=${sessionId}`);
};
const audioBigFive = (sessionId) => {
    return new AxiosServices().get(`big_five/audio?session_id=${sessionId}`);
};
const videoBigFive = (sessionId) => {
    return new AxiosServices().get(`big_five/video?session_id=${sessionId}`);
};
const reportBigFive = (data) => {
    return new AxiosServices().post(`big_five/report`, data);
};
const getPDF = (sessionId) => {
    return new AxiosServices().get(`static/interview/${sessionId}/report.pdf`, {
        responseType: 'arraybuffer',
    });
};
const cleanBigFive = (sessionId) => {
    return new AxiosServices().get(`/big_five/clean?session_id=${sessionId}`);
};

export { audioBigFive, cleanBigFive, getPDF, reportBigFive, startedBigFive, videoBigFive };
