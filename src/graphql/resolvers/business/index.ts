import { Context } from '~graphql/context';
import { post } from './post';
import { useBusiness } from '~contracts/useBusiness';
import { provider } from '~/app';
import { IBusiness } from '~types/business';
import { iig } from './iig';

export const business = {
  ...post,
  ...iig,
  businessByUser: async (parent, args: { user: string }, contextValue: Context, info) => {
    const user = args.user;

    const businessContract = useBusiness(provider);
    const businesses = await businessContract.getAllProfile();
    const businessData = businesses.find((x) => x.user === user);
    if (!businessData) return;
    const result: IBusiness = {
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
  business: async (parent, args: { id: number }, contextValue: Context, info) => {
    const id = args.id;
    const businessContract = useBusiness(provider);
    const businessData = await businessContract.getProfile(id);
    if (!businessData) return;
    const result: IBusiness = {
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
