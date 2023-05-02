import { provider } from '../../../app.js';
import { useBusiness } from '../../../contracts/useBusiness.js';

const getMyPosts = async (request, reply) => {
    const businessContract = useBusiness(provider);
    const posts = await businessContract.getAllPosts();
    const result = posts
        .filter((post) => post.businessId.eq(request.params.userid))
        .map((post) => ({
        id: post.id.toNumber(),
        businessId: post.businessId.toNumber(),
        hashTag: post.hashTag,
        time: new Date(post.time.toNumber() * 1000),
        content: post.content,
        imageSource: post.imageSource,
        job: post.job,
        status: post.status,
    }));
    reply.code(200).send(result);
};

export { getMyPosts };
