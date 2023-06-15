import AxiosServices from '../axiosServices.js';

const startedBigFive = async (sessionId) => {
    return new AxiosServices().get(`big_five/start?session_id=${sessionId}`);
};
const getPDF = async (sessionId) => {
    return new AxiosServices().get(`static/interview/${sessionId}/report.pdf`);
};

export { getPDF, startedBigFive };
