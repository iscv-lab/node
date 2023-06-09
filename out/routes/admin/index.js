import { crawlBigFiveTemplate } from '../../controllers/admin/index.js';

var admin = async (server, options) => {
    server.get('/crawl_big_five_template', crawlBigFiveTemplate);
};

export { admin as default };
