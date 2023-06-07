import AxiosServices from "../axiosServices"

export const generateText = async (interviewId: string)=>{
    return new AxiosServices().get<any>(``)
}