import { getRecentTask } from '../../../controllers/employee/bot/index.js';

var bot = async (server, options) => {
    server.get('/recent_task/:employeeid', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    employeeid: {
                        type: 'number',
                    },
                },
                required: ['employeeid'],
            },
        },
    }, getRecentTask);
};

export { bot as default };
