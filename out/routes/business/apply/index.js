import { getAllApply } from '../../../controllers/business/post/index.js';

var apply = async (server, options) => {
    server.get("/list/:businessId", {
        schema: {
            params: {
                type: "object",
                properties: {
                    businessId: { type: "number" },
                },
                required: ["businessId"],
            },
        },
    }, getAllApply);
};

export { apply as default };
