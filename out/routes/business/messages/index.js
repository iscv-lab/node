import { getRecent } from '../../../controllers/business/messages/index.js';

var messages = async (server, options) => {
    server.get('/recent/:businessid', getRecent);
};

export { messages as default };
