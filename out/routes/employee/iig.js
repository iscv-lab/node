import { postRequest } from '../../controllers/employee/iig/index.js';
import { EIIGRequest } from '../../types/business/iig/index.js';

var iig = async (server, options) => {
    server.post('/request', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    employeeId: { type: 'string' },
                    certificateType: {
                        type: 'string',
                        enum: Object.values(EIIGRequest),
                    },
                },
                required: ['employeeId', 'certificateType'],
            },
        },
    }, postRequest);
};

export { iig as default };
