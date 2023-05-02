import { provider } from '../../../app.js';
import { useBusiness } from '../../../contracts/useBusiness.js';

const getPost = async (request, reply) => {
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

export { getPost };
