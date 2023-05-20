import { postImage } from '../../controllers/common/image.js';
import { imageMiddleware } from '../../middlewares/image/uploadImageMiddleware.js';

var image = async (server, options) => {
    server.post("/", { preHandler: imageMiddleware }, postImage);
};

export { image as default };
