import { app, provider } from '~/app';
import { bigFive } from '~/pythonService/interview';
import socketblock from '~blocks/socketblock';
import { useBusiness } from '~contracts/useBusiness';
import { useEmployee } from '~contracts/useEmployee';
import { BigFive } from '~models/employee/BigFive';
import { InterviewAppointment } from '~models/employee/InterviewAppointment';
import { ERole } from '~types/index';
import { EBotCategory } from '~types/messages/bot';

export const handleBigFive = async (interviewId: string) => {
  const interviewAppointmentData = await InterviewAppointment.findById(interviewId);
  if (!interviewAppointmentData) return;
  const contractEmployee = useEmployee(provider);
  const contractBusiness = useBusiness(provider);
  const [employee, applyData] = await Promise.all([
    contractEmployee.getProfile(interviewAppointmentData.employeeId),
    contractBusiness.getApply(interviewAppointmentData.applyId),
  ]);
  await bigFive(employee.id.toNumber(), employee.name, interviewId!)
    .then(async (success) => {
      const bigFive = new BigFive({
        employeeId: employee.id.toNumber(),
        interviewId: interviewId,
        isRead: false,
        'Agreeableness Comment': success.data['Agreeableness Comment'],
        'Agreeableness Score': success.data['Agreeableness Score'],
        'Conscientiousness Comment': success.data['Conscientiousness Comment'],
        'Conscientiousness Score': success.data['Conscientiousness Score'],
        'Extroversion Comment': success.data['Extroversion Comment'],
        'Extroversion Score': success.data['Extroversion Score'],
        'Neuroticism Comment': success.data['Neuroticism Comment'],
        'Neuroticism Score': success.data['Neuroticism Score'],
        'Openness to Experience Comment': success.data['Openness to Experience Comment'],
        'Openness to Experience Score': success.data['Openness to Experience Score'],
      });
      const bigFiveResult = await bigFive.save();
      const [employeeblock, businessblock] = await Promise.all([
        socketblock.get(employee.id.toNumber(), ERole.EMPLOYEE),
        socketblock.get(applyData.businessId.toNumber(), ERole.BUSINESS),
      ]);
      if (employeeblock?.socketIds?.length) {
        app.io.to(employeeblock!.socketIds).emit('bot_notification', {
          _id: bigFiveResult._id,
          role: ERole.BUSINESS,
          category: EBotCategory.NEW_BIGFIVE_RESULT,
          content: '',
          time: bigFiveResult.updatedAt,
        });
      }
      if (businessblock?.socketIds?.length) {
        app.io.to(businessblock!.socketIds).emit('bot_notification', {
          _id: bigFiveResult._id,
          role: ERole.EMPLOYEE,
          category: EBotCategory.NEW_BIGFIVE_RESULT,
          content: '',
          time: bigFiveResult.updatedAt,
        });
      }
    })
    .catch((error) => console.log(error));
};
