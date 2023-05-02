import { useEmployee } from "~contracts/useEmployee";
import { useEmployeeCV } from "~contracts/useEmployeeCV";
import { Context } from "~graphql/context";

export const cv = {
  cv: async (parent, args, contextValue: Context, info) => {
    console.log("first");
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

    if (!employeeId) return;
    const provider = contextValue.provider;
    const employeeContract = useEmployee(provider);
    const [employees, skills] = await Promise.all([
      employeeContract.getAllProfile(),
      employeeContract.getAllSkill(),
    ]);

    const employee = employees.find((x) => x.id.eq(employeeId));
    // console.log(employee)
    if (!employee) return;

    const result = {
      category: employee.category.toNumber(),
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
    };

    return result;
  },
};
