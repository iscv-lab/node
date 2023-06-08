import AxiosServices from '../axiosServices.js';

const bigFive = async (employeeId, employeeName, interviewId) => {
    return new AxiosServices().get(`${process.env.PYTHON_ENDPOINT}big_five?employee_id=${employeeId}&employee_name=${employeeName}&interview_id=${interviewId}`);
};

export { bigFive };
