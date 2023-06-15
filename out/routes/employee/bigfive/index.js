import { readBigFive } from '../../../controllers/employee/bigfive/index.js';

var bigfive = async (server) => {
    server.put('/read', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    bigfive_id: {
                        type: 'string',
                    },
                },
                required: ['bigfive_id'],
            },
        },
    }, readBigFive);
};

export { bigfive as default };
