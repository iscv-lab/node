import { IIGRequest, ERequestStatus } from '../../../models/business/iig/IIGRequest.js';

const postRequest = async (request, reply) => {
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
const putApproved = async (request, reply) => {
    const requestId = request.query.requestId;
    const result = await IIGRequest.findByIdAndUpdate(requestId, {
        status: ERequestStatus.APPROVED,
    });
    await reply.code(200).send(result);
};

export { postRequest, putApproved };
