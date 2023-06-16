import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useBusiness } from '~contracts/useBusiness';

export const searchBusiness = async (
  request: FastifyRequest<{ Querystring: { search: string } }>,
  reply: FastifyReply,
) => {
  const search = request.query.search;
  if (!search) {
    await reply.code(200).send([]);
    return;
  }

  const businessContract = useBusiness(provider);
  const businesses = await businessContract.getAllProfile();
  const filtered = businesses.filter((x) =>
    x.name
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .includes(search.normalize('NFD').replace(/\p{Diacritic}/gu, '')),
  );
  const result = filtered.map((business) => ({
    id: business.id.toNumber(),
    user: business.user,
    name: business.name,
    phone: business.phone,
    professional: business.professional,
    email: business.email,
    github: business.github,
    linkedin: business.linkedin,
    sourceImage: business.sourceImage,
    category: business.category,
  }));
  await reply.code(200).send(result);
};
