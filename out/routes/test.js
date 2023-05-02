const myMiddleware = async (request, reply, done) => {
    try {
        // Perform some logic
        const data = { foo: "bar" };
        // Add data to the request object
        request.myData = data;
        // Call the `done` function to proceed to the next middleware/controller
        done();
    }
    catch (err) {
        // Handle errors
        reply.send(err);
    }
};
const BlogRoute = async (server, options) => {
    server.get("/", { preHandler: myMiddleware }, async (request, reply) => {
        const data = request.myData;
        return reply.code(200).send(data);
    });
};

export { BlogRoute as default };
