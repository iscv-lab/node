import AxiosServices from '~python/axiosServices';

export const postRecommend = async (skills: string[]) => {
  return new AxiosServices().post<string[]>('/job/recommend', {
    skills,
  });
};
