import AxiosServices from '../axiosServices';

export const generateText = async (interviewId: string) => {
  return new AxiosServices().get<any>(``);
};

export const bigFive = async (employeeId: number, employeeName: string, interviewId: string) => {
  return new AxiosServices().get<any>(
    `${process.env.PYTHON_ENDPOINT}big_five?employee_id=${employeeId}&employee_name=${employeeName}&interview_id=${interviewId}`,
  );
};
