import image from './image.js';

var common = async (server, options) => {
    server.get("/", {}, async (request, reply) => {
        return reply.code(200).send({ message: "hello" });
    });
    server.register(image, { prefix: "image" });
};

export { common as default };
