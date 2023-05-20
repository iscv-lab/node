import { getBusiness, getBusinessByUser } from '../../../controllers/business/profile/index.js';
import { postAvatar } from '../../../controllers/employee/profile/index.js';
import { imageMiddleware } from '../../../middlewares/image/uploadImageMiddleware.js';

var profile = async (server, options) => {
    server.post("/avatar", { preHandler: imageMiddleware }, postAvatar);
    server.get("/item/:id", getBusiness);
    server.get("/user/:user", getBusinessByUser);
};

export { profile as default };
