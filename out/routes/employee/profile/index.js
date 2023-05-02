import { postAvatar } from '../../../controllers/employee/profile/index.js';
import { imageMiddleware, removeTemp } from '../../../middlewares/image/uploadImageMiddleware.js';

var profile = async (server, options) => {
    server.post("/avatar", { preHandler: imageMiddleware, onResponse: removeTemp }, postAvatar);
    // server.get("/avatar/:cid", getAvatar);
};

export { profile as default };
