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

export const reportBigFive = (sessionId: number, employeeName: string, employeeId: number) => {
  return new AxiosServices().get<'success'>(
    `big_five/report?employee_id=${employeeId}&session_id=${sessionId}&employee_name=${employeeName}`,
  );
};

export const getPDF = (sessionId: number) => {
  return new AxiosServices().get<any>(`static/interview/${sessionId}/report.pdf`);
};
