import { setInterviewAppointment, readInterviewAppointment, getBigFive } from '../../../controllers/employee/interview/index.js';

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
    server.get('/bigfive', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    employee_id: { type: 'number' },
                },
                required: ['employee_id'],
            },
        },
    }, getBigFive);
};

export { appointment as default };
