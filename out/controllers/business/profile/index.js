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
        reply.code(400).send('required user');
        return;
    }
    const businessContract = useBusiness(provider);
    const businesses = await businessContract.getAllProfile();
    const business = businesses.find((x) => x.user.toString().toLowerCase() === user.toLowerCase());
    if (!business) {
        reply.code(404).send('not found');
        return;
    }
    reply.code(200).send({
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
const searchBusinesses = async (request, reply) => {
    const search = request.query.search;
    const businessContract = useBusiness(provider);
    const businesses = await businessContract.getAllProfile();
    const filtered = businesses.filter((x) => x.name
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .includes(search.normalize('NFD').replace(/\p{Diacritic}/gu, '')));
    const result = filtered.map((x) => ({
        id: x.id.toNumber(),
        user: x.user,
        name: x.name,
        sourceImage: x.sourceImage,
    }));
    await reply.code(200).send(result);
};

export { getBusiness, getBusinessByUser, searchBusinesses };
