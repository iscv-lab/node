import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { getMyPosts, getPost, newPost } from '~controllers/business/post';
import { imageMiddleware } from '~middlewares/image/uploadImageMiddleware';
import { PostStatus } from '~types/post';

export default async (server: FastifyInstance, options: FastifyPluginOptions) => {
  server.get('/myposts/:userid', getMyPosts);
  server.post(
    '/new',
    {
      preHandler: imageMiddleware,
      schema: {
        params: {
          type: 'object',
          properties: {
            userid: {
              type: 'number',
            },
          },
          required: ['userid'],
        },
      },
    },
    newPost,
  );
  server.get(
    '/get/:post_id',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            post_id: {
              type: 'string',
            },
          },
          required: ['post_id'],
        },
      },
    },
    getPost,
  );
};
