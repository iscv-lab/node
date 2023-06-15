import { FastifyReply, FastifyRequest } from 'fastify';
import { ipfs, provider } from '~/app';
import fs from 'fs';
import { useBusiness } from '~contracts/useBusiness';
import { useEmployee } from '~contracts/useEmployee';

export const postAvatar = async (request: FastifyRequest, reply: FastifyReply) => {
  if (!request.form?.image) return;

  const image = await fs.promises.readFile(request.form?.image as Buffer);
  if (!image) return;
  const { cid } = await ipfs.add(image);

  reply.code(200).send(cid.toString());
};

export const getBusiness = async (request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
  const id = request.params.id;
  if (!id) return;
  const businessContract = useBusiness(provider);
  const businesses = await businessContract.getAllProfile();
  const business = businesses.find((x) => x.id.eq(id));
  if (!business) return;
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

export const getBusinessByUser = async (request: FastifyRequest<{ Params: { user: string } }>, reply: FastifyReply) => {
  const user = request.params.user;

  if (!user) {
    reply.code(400).send('required user');
    return;
  }
  const businessContract = useBusiness(provider);
  const businesses = await businessContract.getAllProfile();

  const business = businesses.find((x) => x.user.toString().toLowerCase() === user.toLowerCase());

  if (!business) {
    reply.code(400).send("not found");
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

export const searchBusinesses = async (
  request: FastifyRequest<{ Querystring: { search: string } }>,
  reply: FastifyReply,
) => {
  const search = request.query.search;

  const businessContract = useBusiness(provider);

  const businesses = await businessContract.getAllProfile();

  const filtered = businesses.filter((x) =>
    x.name
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .includes(search.normalize('NFD').replace(/\p{Diacritic}/gu, '')),
  );

  const result = filtered.map((x) => ({
    id: x.id.toNumber(),
    user: x.user,
    name: x.name,
    sourceImage: x.sourceImage,
  }));
  await reply.code(200).send(result);
};
