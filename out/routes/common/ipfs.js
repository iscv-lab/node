import { postObject, postJSON } from '../../controllers/common/ipfs.js';

var ipfs = async (server, options) => {
    server.post('/object', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    data: {
                        type: 'object',
                    },
                },
                required: ['data'],
            },
        },
    }, postObject);
    server.post('/json', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    data: {
                        type: 'string',
                    },
                },
                required: ['data'],
            },
        },
    }, postJSON);
};

export { ipfs as default };
