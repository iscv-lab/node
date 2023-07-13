import { useBusiness } from '../../../contracts/useBusiness.js';
import { useEmployee } from '../../../contracts/useEmployee.js';
import { Post } from '../../../models/business/Post.js';

const post = {
    post: async (parent, args, contextValue, info) => {
        const id = args.id;
        const employeeId = args.employeeId;
        const businessContract = useBusiness(contextValue.provider);
        const employeeContract = useEmployee(contextValue.provider);
        const [post, applies] = await Promise.all([Post.findById(id), employeeContract.getListAppliesPost()]);
        if (!post)
            return;
        const businessData = await businessContract.getProfile(post.businessId);
        const result = {
            ...post.toObject(),
            businessImage: businessData.sourceImage,
            businessName: businessData.name,
            applied: Boolean(employeeId !== undefined &&
                employeeId !== null &&
                applies.some((x) => {
                    const t = { ...x };
                    return t['postId'] === post._id.toString() && t['employeeId'].eq(employeeId);
                })),
        };
        return result;
    },
    posts: async (parent, args, contextValue, info) => {
        const businessId = args.businessId;
        if (businessId === undefined || businessId === null || businessId === -1)
            return [];
        const posts = await Post.find({ businessId: businessId }, { _id: 1 });
        return posts;
    },
};

export { post };
