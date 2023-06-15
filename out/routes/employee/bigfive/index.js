import { getLastestSessionId } from '../../../controllers/employee/bigfive/index.js';

var bigfive = async (server) => {
    // server.get(
    //   '/start',
    //   {
    //     schema: {
    //       querystring: {
    //         type: 'object',
    //         properties: {
    //           employee_id: {
    //             type: 'number',
    //           },
    //         },
    //         required: ['employee_id'],
    //       },
    //     },
    //   },
    //   checkDiff,
    // );
    server.get('/lastest', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    employee_id: {
                        type: 'number',
                    },
                },
                required: ['employee_id'],
            },
        },
    }, getLastestSessionId);
};

export { bigfive as default };
