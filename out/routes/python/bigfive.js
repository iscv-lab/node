import { reciveStarted, reciveVideo, reciveAudio } from '../../controllers/python/bigfive/index.js';

var bigfive = async (server) => {
    server.get('/started', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    session_id: { type: 'number' },
                },
                required: ['session_id'],
            },
        },
    }, reciveStarted);
    server.get('/video', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    session_id: { type: 'number' },
                },
                required: ['session_id'],
            },
        },
    }, reciveVideo);
    server.get('/audio', {
        schema: {
            querystring: {
                type: 'object',
                properties: {
                    session_id: { type: 'number' },
                },
                required: ['session_id'],
            },
        },
    }, reciveAudio);
};

export { bigfive as default };
