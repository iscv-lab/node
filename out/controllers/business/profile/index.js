import { provider } from '../../../app.js';
import 'fs';
import { useBusiness } from '../../../contracts/useBusiness.js';

const getBusiness = async (request, reply) => {
    const id = request.params.id;
    if (!id)
        return;
    const businessContract = useBusiness(provider);
    const businesses = await businessContract.getAllProfile();
    const business = businesses.find((x) => x.id.eq(id));
    if (!business)
        return;
    reply.code(200).send({
        category: business.category.toNumber(),
        id: business.id.toNumber(),
        user: business.user,
        name: business.name,
        phone: business.phone,
        professional: business.professional,
        email: business.email,
        github: business.github,
        linkedin: business.linkedin,
        sourceImage: business.sourceImage,
    });
};
const getBusinessByUser = async (request, reply) => {
    const user = request.params.user;
    if (!user) {
        reply.code(400).send("required user");
        return;
    }
    const businessContract = useBusiness(provider);
    const businesses = await businessContract.getAllProfile();
    const business = businesses.find((x) => x.user.toString().toLowerCase() === user.toLowerCase());
    if (!business) {
        reply.code(404).send("not found");
        return;
    }
    reply.code(200).send({
        category: business.category.toNumber(),
        id: business.id.toNumber(),
        user: business.user,
        name: business.name,
        phone: business.phone,
        professional: business.professional,
        email: business.email,
        github: business.github,
        linkedin: business.linkedin,
        sourceImage: business.sourceImage,
    });
};

export { getBusiness, getBusinessByUser };
