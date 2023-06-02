import { getRecent } from '../../../controllers/business/messages/index.js';

var messages = async (server, options) => {
    server.get('/recent/:employeeid', getRecent);
};

export { messages as default };
