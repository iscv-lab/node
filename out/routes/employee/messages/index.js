import { getRecent, getHistory } from '../../../controllers/employee/messages/index.js';

var messages = async (server, options) => {
    server.get('/recent/:employeeid', getRecent);
    server.get('/histories/:employee_id', {
        schema: {
            params: { type: 'object', properties: { employee_id: { type: 'string' } }, required: ['employee_id'] },
            querystring: { type: 'object', properties: { business_id: { type: 'string' } }, required: ['business_id'] },
        },
    }, getHistory);
};

export { messages as default };
