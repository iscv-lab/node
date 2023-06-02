import { getEmployee } from '../../controllers/employee/profile/index.js';

var profile = async (server, options) => {
    server.get('/item/:employeeid', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    employeeid: { type: 'number' },
                },
                required: ['employeeid'],
            },
        },
    }, getEmployee);
};

export { profile as default };
