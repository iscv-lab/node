import { post } from './post.js';
import { useBusiness } from '../../../contracts/useBusiness.js';
import { provider } from '../../../app.js';
import { iig } from './iig/index.js';

const business = {
    ...post,
    ...iig,
    businessByUser: async (parent, args, contextValue, info) => {
        const user = args.user;
        const businessContract = useBusiness(provider);
        const businesses = await businessContract.getAllProfile();
        const businessData = businesses.find((x) => x.user === user);
        if (!businessData)
            return;
        const result = {
            id: businessData.id.toNumber(),
            user: businessData.user,
            name: businessData.name,
            phone: businessData.phone,
            professional: businessData.professional,
            email: businessData.email,
            github: businessData.github,
            linkedin: businessData.linkedin,
            sourceImage: businessData.sourceImage,
            category: businessData.category,
        };
        return result;
    },
    business: async (parent, args, contextValue, info) => {
        const id = args.id;
        const businessContract = useBusiness(provider);
        const businessData = await businessContract.getProfile(id);
        if (!businessData)
            return;
        const result = {
            id: businessData.id.toNumber(),
            user: businessData.user,
            name: businessData.name,
            phone: businessData.phone,
            professional: businessData.professional,
            email: businessData.email,
            github: businessData.github,
            linkedin: businessData.linkedin,
            sourceImage: businessData.sourceImage,
            category: businessData.category,
        };
        return result;
    },
};

export { business };
