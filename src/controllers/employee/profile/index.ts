import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useEmployee } from '~contracts/useEmployee';

export const getEmployee = async (request: FastifyRequest<{ Params: { employeeid: number } }>, reply: FastifyReply) => {
  const employeeId = request.params.employeeid;
  const employeeContract = useEmployee(provider);
  return await employeeContract.getProfile(employeeId).then((data) => ({
    ...data,
    id: data!.id.toNumber(),
  }));
};
