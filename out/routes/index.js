import employee from './employee/index.js';
import business from './business/index.js';
import common from './common/index.js';
import shared from './shared/index.js';
import admin from './admin/index.js';
import python from './python/index.js';
import ftisu from './ftisu/index.js';

var routes = async (server, options) => {
    server.get('/', {}, async (request, reply) => {
        return reply.code(200).send({ message: 'hello' });
    });
    server.register(employee, { prefix: 'employee' });
    server.register(business, { prefix: 'business' });
    server.register(common, { prefix: 'common' });
    server.register(shared, { prefix: 'shared' });
    server.register(admin, { prefix: 'admin' });
    server.register(python, { prefix: 'python' });
    server.register(ftisu, { prefix: 'ftisu' });
};

export { routes as default };
