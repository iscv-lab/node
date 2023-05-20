import { useBusiness } from '../../../contracts/useBusiness.js';

const post = {
    post: async (parent, args, contextValue, info) => {
        const businessContract = useBusiness(contextValue.provider);
        const [posts, businesses, applies] = await Promise.all([
            businessContract.getAllPosts(),
            businessContract.getAllProfile(),
            businessContract.getAllApplies(),
        ]);
        const post = posts.find((post) => post.businessId.eq(args.id));
        const business = businesses.find((x) => x.id.eq(post?.businessId));
        if (!post || !business)
            return;
        const apply = applies.find((x) => args.employeeId &&
            x.postId.eq(post.id) &&
            x.employeeId.eq(args.employeeId));
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
            applyId: apply?.id.toNumber(),
            applyTime: apply?.time.toNumber(),
            applyStatus: apply?.status.toNumber(),
        };
        return result;
    },
};

export { post };
