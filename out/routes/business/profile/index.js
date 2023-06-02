import { getBusiness, getBusinessByUser, searchBusinesses } from '../../../controllers/business/profile/index.js';

var profile = async (server, options) => {
    server.get('/item/:id', getBusiness);
    server.get('/user/:user', getBusinessByUser);
    server.get('/search', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    search: { type: 'string' },
                },
                required: ['search'],
            },
        },
    }, searchBusinesses);
};

export { profile as default };
