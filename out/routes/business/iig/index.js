import { getListLR, getListRequest } from '../../../controllers/business/iig/index.js';
import { putApproved } from '../../../controllers/employee/iig/index.js';

var iig = async (server, options) => {
    server.get("/listlr", getListLR);
    server.get("/listrequest", getListRequest);
    server.put("/approved", {
        schema: {
            querystring: {
                type: "object",
                properties: {
                    requestId: { type: "string" },
                },
                required: ["requestId"],
            },
        },
    }, putApproved);
};

export { iig as default };
