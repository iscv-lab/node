import { postAvatar } from '../../../controllers/employee/profile/index.js';
import { imageMiddleware } from '../../../middlewares/image/uploadImageMiddleware.js';

var profile = async (server, options) => {
    server.post("/avatar", { preHandler: imageMiddleware }, postAvatar);
    // server.get("/avatar/:cid", getAvatar);
};

export { profile as default };
