import { setInterviewAppointment } from '../../../controllers/business/appointment/index.js';

var appointment = async (server) => {
    server.post('/new', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    employeeId: { type: 'number' },
                    postId: { type: 'string' },
                },
                required: ['employeeId', 'postId'],
            },
        },
    }, setInterviewAppointment);
};

export { appointment as default };
