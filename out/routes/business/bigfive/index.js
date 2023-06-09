import { getListBigFive } from '../../../controllers/business/bigfive/index.js';

var bigfive = async (server, options) => {
    server.get('/lastest/:business_id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    business_id: { type: 'number' },
                },
                required: ['business_id'],
            },
        },
    }, getListBigFive);
};

export { bigfive as default };
