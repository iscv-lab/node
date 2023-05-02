import { FastifyReply, FastifyRequest } from "fastify";
import { provider } from "~/app";
import { useBusiness } from "~contracts/useBusiness";

export const getPost = async (
  request: FastifyRequest<{ Params: { id: number } }>,
  reply: FastifyReply
) => {
  const businessContract = useBusiness(provider);
  const posts = await businessContract.getAllPosts({});
  const post = posts.find((x) => x.id.eq(request.params.id));
  if (!post) {
    reply.code(404).send("not found");
    return;
  }
  const result = {
    id: post?.id.toNumber(),
    businessId: post.businessId.toNumber(),
    hashTag: post.hashTag,
    time: new Date(post.time.toNumber() * 1000),
    content: post.content,
    imageSource: post.imageSource,
    job: post.job,
    status: post.status,
  };
  reply.code(200).send(result);
};
