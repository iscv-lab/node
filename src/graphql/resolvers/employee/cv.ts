import { useIIG } from "~contracts/iig/useIIG";
import { useEmployee } from "~contracts/useEmployee";
import { useEmployeeCV } from "~contracts/useEmployeeCV";
import { Context } from "~graphql/context";
import { exponentialSearch } from "~utils/search";

export const cv = {
  cv: async (parent, args, contextValue: Context, info) => {
    const id = args.id;
    if (!id) return;
    const provider = contextValue.provider;
    const employeeCVContract = useEmployeeCV(provider);
    return await employeeCVContract
      .getCVs()
      .then((success) => {
        const data = success.find((value, index) => value.id.eq(id));

        return {
          ...data,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
  defaultCV: async (
    parent,
    args: { employeeId: number },
    contextValue: Context,
    info
  ) => {
    const employeeId = args.employeeId;

    if (employeeId === undefined || employeeId === null) return;
    const provider = contextValue.provider;
    const employeeContract = useEmployee(provider);

    const iigContract = useIIG(provider);
    const [employees, skills, lrs, sws] = await Promise.all([
      employeeContract.getAllProfile(),
      employeeContract.getAllSkill(),
      iigContract.getAllIIGLRResult(),
      iigContract.getAllIIGSWResult(),
    ]);

    // const employeeIndex = exponentialSearch(employees, employeeId, "id", "eq");
    // const employeeIndex = employees.findIndex((x) => x.id.eq(employeeId));
    // console.log(employeeIndex);
    // if (employeeIndex === -1) return;
    const employee = employees.find((x) => x.id.eq(employeeId));
    if (!employee) return;

    const lr = lrs
      .slice()
      .reverse()
      .find((x) => x.employeeId.eq(employeeId));

    const sw = sws
      .slice()
      .reverse()
      .find((x) => x.employeeId.eq(employeeId));

    const result = {
      id: employee.id.toNumber(),
      user: employee.user,
      name: employee.name,
      phone: employee.phone,
      professional: employee.professional,
      email: employee.email,
      github: employee.github,
      linkedin: employee.linkedin,
      sourceImage: employee.sourceImage,
      skills: skills.map((x) => ({
        id: x.id.toNumber(),
        employeeId: x.employeeId.toNumber(),
        title: x.title,
        level: x.level.toNumber(),
      })),
      certificate: {
        iig: {
          lr: {
            id: lr?.id.toNumber(),
            employeeId: lr?.employeeId.toNumber(),
            testDate: lr?.testDate.toNumber(),
            shiftTest: lr?.shiftTest,
            expireDate: lr?.expireDate.toNumber(),
            listeningScore: lr?.listeningScore.toNumber(),
            readingScore: lr?.readingScore.toNumber(),
            time: lr?.time.toNumber(),
          },
          sw: {
            id: sw?.id.toNumber(),
            employeeId: sw?.employeeId.toNumber(),
            testDate: sw?.testDate.toNumber(),
            shiftTest: sw?.shiftTest,
            expireDate: sw?.expireDate.toNumber(),
            speakingScore: sw?.speakingScore.toNumber(),
            writingScore: sw?.writingScore.toNumber(),
            time: sw?.time.toNumber(),
          },
        },
      },
    };

    return result;
  },
  // customCV: async (
  //   parent,
  //   args: { employeeId: number },
  //   contextValue: Context,
  //   info
  // ) => {

  // },
};
