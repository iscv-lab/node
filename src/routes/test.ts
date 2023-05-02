import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
  FastifyRequest,
  DoneFuncWithErrOrRes
} from "fastify";

declare module "fastify" {
  interface FastifyRequest {
    myData: { [key: string]: any };
  }
}

const myMiddleware = async (request: FastifyRequest, reply, done) => {
  try {
    // Perform some logic
    const data = { foo: "bar" };

    // Add data to the request object
    request.myData = data;

    // Call the `done` function to proceed to the next middleware/controller
    done();
  } catch (err) {
    // Handle errors
    reply.send(err);
  }
};

const BlogRoute: FastifyPluginAsync = async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/", { preHandler: myMiddleware }, async (request, reply) => {
    const data = request.myData;
    return reply.code(200).send(data);
  });
};
export default BlogRoute;
