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
const reportBigFive = (sessionId, employeeName, employeeId) => {
    return new AxiosServices().get(`big_five/report?employee_id=${employeeId}&session_id=${sessionId}&employee_name=${employeeName}`);
};
const getPDF = (sessionId) => {
    return new AxiosServices().get(`static/interview/${sessionId}/report.pdf`);
};

export { audioBigFive, getPDF, reportBigFive, startedBigFive, videoBigFive };
