import { readInterviewAppointment } from '../../../controllers/employee/appointment/index.js';

var appointment = async (server, options) => {
    server.get('/read', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    interview_id: { type: 'string' },
                },
                required: ['interview_id'],
            },
        },
    }, readInterviewAppointment);
};

export { appointment as default };
