import { FastifyReply, FastifyRequest } from 'fastify';
import { ERequestStatus, IIGRequest } from '~models/business/iig/IIGRequest';
import { EIIGRequest } from '~types/business/iig';

export const postRequest = async (
  request: FastifyRequest<{
    Body: {
      employeeId: number;
      examId: number;
      certificateType: EIIGRequest;
    };
  }>,
  reply: FastifyReply,
) => {
  const employeeId = request.body.employeeId;
  const examId = request.body.examId;
  const certificateType = request.body.certificateType;

  const newRequest = new IIGRequest({
    employeeId,
    examId,
    certificateType,
    status: ERequestStatus.WAITING,
  });
  const requestResult = await newRequest.save();
  await reply.code(201).send(requestResult);
};

export const putApproved = async (
  request: FastifyRequest<{ Querystring: { requestId: string } }>,
  reply: FastifyReply,
) => {
  const requestId = request.query.requestId;
  const result = await IIGRequest.findByIdAndUpdate(requestId, {
    status: ERequestStatus.APPROVED,
  });
  await reply.code(200).send(result);
};
