import { getListLR } from '../../../controllers/business/iig/index.js';

var iig = async (server, options) => {
    server.get("/listlr", getListLR);
};

export { iig as default };
