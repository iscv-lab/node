import { getMyPosts } from '../../../controllers/business/post/index.js';

var posts = async (server, options) => {
    server.get("/myposts/:userid", getMyPosts);
};

export { posts as default };
