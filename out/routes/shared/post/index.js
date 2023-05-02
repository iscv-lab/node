import { getPost } from '../../../controllers/shared/post/index.js';

var post = async (server, options) => {
    server.get("/item/:id", getPost);
};

export { post as default };
