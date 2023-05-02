import { useBusiness } from '../../../contracts/useBusiness.js';

const post = {
    post: async (parent, args, contextValue, info) => {
        const businessContract = useBusiness(contextValue.provider);
        const [posts, businesses] = await Promise.all([
            businessContract.getAllPosts(),
            businessContract.getAllProfile(),
        ]);
        const post = posts.find((post) => post.businessId.eq(args.id));
        const business = businesses.find((x) => x.id.eq(post?.businessId));
        if (!post || !business)
            return;
        const result = {
            id: post.id.toNumber(),
            businessName: business?.name,
            businessUser: business?.user,
            businessSourceImage: business?.sourceImage,
            businessId: post.businessId.toNumber(),
            hashTag: post.hashTag,
            time: new Date(post.time.toNumber() * 1000),
            content: post.content,
            imageSource: post.imageSource,
            job: post.job,
            status: post.status,
        };
        return result;
    },
};

export { post };
