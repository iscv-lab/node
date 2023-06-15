import axios from 'axios';

export const startedBigFive = async (sessionId: string) => {
  return axios.get<'approved'>(`big_five/video?session_id=${sessionId}`);
};

export const audioBigFive = async (sessionId: string) => {
  return axios.get<'audio_approved'>(`big_five/audio?session_id=${sessionId}`);
};

export const videoBigFive = async (sessionId: string) => {
  return axios.get<'video_approved'>(`big_five/video?session_id=${sessionId}`);
};

export const getPDF = async (sessionId: string) => {
  return axios.get<any>(`static/interview/${sessionId}/report.pdf`);
};
