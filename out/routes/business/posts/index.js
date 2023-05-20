import { getMyPosts, newPost } from '../../../controllers/business/post/index.js';
import { imageMiddleware } from '../../../middlewares/image/uploadImageMiddleware.js';

var posts = async (server, options) => {
    server.get("/myposts/:userid", getMyPosts);
    server.post("/new", {
        preHandler: imageMiddleware,
        // schema: {
        //   body: {
        //     type: "object",
        //     description: "Post category data",
        //     properties: {
        //       job: { type: "string" },
        //       content: { type: "string" },
        //       hashtag: { type: "string" },
        //       image: {},
        //       video: {},
        //       status: { type: "number", enum: Object.values(PostStatus) },
        //     },
        //     required: ["content", "hashtag", "status"],
        //   },
        // },
    }, newPost);
};

export { posts as default };
