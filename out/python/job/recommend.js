import AxiosServices from '../axiosServices.js';

const postRecommend = async (skills) => {
    return new AxiosServices().post('/job/recommend', {
        skills,
    });
};

export { postRecommend };
