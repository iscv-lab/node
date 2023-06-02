import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useEmployee } from '~contracts/useEmployee';
import { IEmployee } from '~types/employee';

export const getEmployee = async (request: FastifyRequest<{ Params: { employeeid: number } }>, reply: FastifyReply) => {
  const employeeId = request.params.employeeid;
  const employeeContract = useEmployee(provider);
  return await employeeContract.getProfile(employeeId).then((data) => ({
    ...data,
    id: data!.id.toNumber(),
  }));
};

export const searchEmployees = async (
  request: FastifyRequest<{ Querystring: { search: string } }>,
  reply: FastifyReply,
) => {
  const search = request.query.search;

  const employeeContract = useEmployee(provider);

  const employees = await employeeContract.getAllProfile();

  const filtered = employees.filter((x) =>
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
