import AxiosServices from '~python/axiosServices';

export const startedBigFive = async (sessionId: string) => {
  return new AxiosServices().get<'approved'>(`big_five/start?session_id=${sessionId}`);
};

export const audioBigFive = async (sessionId: string) => {
  return new AxiosServices().get<'audio_approved'>(`big_five/audio?session_id=${sessionId}`);
};

export const videoBigFive = async (sessionId: string) => {
  return new AxiosServices().get<'video_approved'>(`big_five/video?session_id=${sessionId}`);
};

export const getPDF = async (sessionId: string) => {
  return new AxiosServices().get<any>(`static/interview/${sessionId}/report.pdf`);
};
