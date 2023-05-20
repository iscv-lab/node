import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getMyPosts, newPost } from "~controllers/business/post";
import { imageMiddleware } from "~middlewares/image/uploadImageMiddleware";
import { PostStatus } from "~types/post";

export default async (
  server: FastifyInstance,
  options: FastifyPluginOptions
) => {
  server.get("/myposts/:userid", getMyPosts);
  server.post(
    "/new",
    {
      preHandler: imageMiddleware,
      // schema: {
        
      //   body: {
      //     type: "object",
      //     description: "Post category data",
      //     properties: {
      //       job: { type: "string" },
      //       content: { type: "string" },
      //       hashtag: { type: "string" },
      //       image: {},
      //       video: {},
      //       status: { type: "number", enum: Object.values(PostStatus) },
      //     },
      //     required: ["content", "hashtag", "status"],
      //   },
      // },
    },
    newPost
  );
};
