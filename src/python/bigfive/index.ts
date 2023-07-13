import { IBigFiveResult } from '~models/employee/BigFiveSession';
import AxiosServices from '~python/axiosServices';

export const startedBigFive = (sessionId: number) => {
  return new AxiosServices().get<'approved'>(`big_five/start?session_id=${sessionId}`);
};

export const audioBigFive = (sessionId: number) => {
  return new AxiosServices().get<'audio_approved'>(`big_five/audio?session_id=${sessionId}`);
};

export const videoBigFive = (sessionId: number) => {
  return new AxiosServices().get<'video_approved'>(`big_five/video?session_id=${sessionId}`);
};

export const reportBigFive = (data: {
  employeeId: number;
  sessionId: number;
  employeeName: string;
  bigfive: IBigFiveResult;
}) => {
  return new AxiosServices().post<'success'>(`big_five/report`, data);
};

export const getPDF = (sessionId: number) => {
  return new AxiosServices().get<Buffer>(`static/interview/${sessionId}/report.pdf`, {
    responseType: 'arraybuffer',
  });
};

export const cleanBigFive = (sessionId: number) => {
  return new AxiosServices().get<'success'>(`/big_five/clean?session_id=${sessionId}`);
};
