import axios from 'axios';

const startedBigFive = async (sessionId) => {
    return axios.get(`big_five/video?session_id=${sessionId}`);
};
const getPDF = async (sessionId) => {
    return axios.get(`static/interview/${sessionId}/report.pdf`);
};

export { getPDF, startedBigFive };
