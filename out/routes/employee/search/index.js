import { searchBusiness } from '../../../controllers/employee/search/index.js';

var search = async (server) => {
    server.get('/business', searchBusiness);
};

export { search as default };
