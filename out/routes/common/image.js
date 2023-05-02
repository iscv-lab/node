import { postImage } from '../../controllers/common/image.js';
import { imageMiddleware, removeTemp } from '../../middlewares/image/uploadImageMiddleware.js';

var image = async (server, options) => {
    server.post("/", { preHandler: imageMiddleware, onResponse: removeTemp }, postImage);
};

export { image as default };
