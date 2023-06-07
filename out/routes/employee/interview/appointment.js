import { setInterviewAppointment } from '../../../controllers/employee/interview/index.js';

var appointment = async (server, options) => {
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
