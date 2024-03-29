import { FastifyReply, FastifyRequest } from 'fastify';
import { provider } from '~/app';
import { useBusiness } from '~contracts/useBusiness';
import { useEmployee } from '~contracts/useEmployee';
import { InterviewAppointment } from '~models/employee/InterviewAppointment';
import { quickSort } from '~utils/quickSort';

export const getListBigFive = async (
  request: FastifyRequest<{ Params: { business_id: number } }>,
  reply: FastifyReply,
) => {
  // const businessId = request.params.business_id;
  // const businessContract = useBusiness(provider);
  // const employeeContract = useEmployee(provider);
  // const applyDatas = await businessContract.getAllApplies();
  // const applies = applyDatas.filter((x) => x.businessId.eq(businessId));
  // const interviews = await InterviewAppointment.find({ applyId: { $in: applies.map((x) => x.id.toNumber()) } });
  // const bigFives = await BigFive.find({ interviewId: { $in: interviews.map((x) => x._id) } });
  // const pipeline = bigFives.map(async (bigFive) => {
  //   const [employee] = await Promise.all([employeeContract.getProfile(bigFive.employeeId)]);
  //   return {
  //     _id: bigFive._id,
  //     employeeId: bigFive['employeeId'],
  //     employeeName: employee.name,
  //     employeeImage: employee.sourceImage,
  //     employeeProfessional: employee.professional,
  //     interviewId: bigFive['interviewId'],
  //     'Agreeableness Comment': bigFive['Agreeableness Comment'],
  //     'Agreeableness Score': bigFive['Agreeableness Score'],
  //     'Conscientiousness Comment': bigFive['Conscientiousness Comment'],
  //     'Conscientiousness Score': bigFive['Conscientiousness Score'],
  //     'Extroversion Comment': bigFive['Extroversion Comment'],
  //     'Extroversion Score': bigFive['Extroversion Score'],
  //     'Neuroticism Comment': bigFive['Neuroticism Comment'],
  //     'Neuroticism Score': bigFive['Neuroticism Score'],
  //     'Openness to Experience Comment': bigFive['Openness to Experience Comment'],
  //     'Openness to Experience Score': bigFive['Openness to Experience Score'],
  //     updatedAt: bigFive.updatedAt,
  //   };
  // });
  // const data = await Promise.all(pipeline);

  // const result = quickSort(data, (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
  await reply.code(200).send('result');
};
