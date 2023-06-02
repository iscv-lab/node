import { getEmployee, searchEmployees } from '../../controllers/employee/profile/index.js';

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
    }, searchEmployees);
};

export { profile as default };
