import BlogRoute from './test.js';
import employee from './employee/index.js';
import business from './business/index.js';
import common from './common/index.js';
import shared from './shared/index.js';

var routes = async (server, options) => {
    server.get("/", {}, async (request, reply) => {
        return reply.code(200).send({ message: "hello" });
    });
    server.register(BlogRoute, { prefix: "test" });
    server.register(employee, { prefix: "employee" });
    server.register(business, { prefix: "business" });
    server.register(common, { prefix: "common" });
    server.register(shared, { prefix: "shared" });
};

export { routes as default };
