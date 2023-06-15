import { setInterviewAppointment, readInterviewAppointment } from '../../../controllers/employee/interview/index.js';

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
