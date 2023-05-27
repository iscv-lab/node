import { getBusiness, getBusinessByUser } from '../../../controllers/business/profile/index.js';

var profile = async (server, options) => {
    // server.post("/avatar", { preHandler: imageMiddleware }, postAvatar);
    server.get("/item/:id", getBusiness);
    server.get("/user/:user", getBusinessByUser);
};

export { profile as default };
