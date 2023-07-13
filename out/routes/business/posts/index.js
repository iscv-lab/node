import { getMyPosts, newPost, getPost } from '../../../controllers/business/post/index.js';
import { imageMiddleware } from '../../../middlewares/image/uploadImageMiddleware.js';

var posts = async (server, options) => {
    server.get('/myposts/:userid', getMyPosts);
    server.post('/new', {
        preHandler: imageMiddleware,
    }, newPost);
    server.get('/get/:post_id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    post_id: {
                        type: 'string',
                    },
                },
                required: ['post_id'],
            },
        },
    }, getPost);
};

export { posts as default };
