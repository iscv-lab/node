import { useEmployee } from "~contracts/useEmployee";
import { Context } from "~graphql/context";

export const skill = {
  skillsByEmployee: async (
    parent,
    args: { employeeId: number },
    contextValue: Context,
    info
  ) => {
    const employeeId = args.employeeId;
    if (employeeId === undefined) return;
    const { provider } = contextValue;
    const employeeContract = useEmployee(provider);
    const skills = await employeeContract.getAllSkill();
    const skill = skills.filter((x) => x.employeeId.eq(employeeId));

    return skill.map((x) => ({
      id: x.id.toNumber(),
      employeeId: x.employeeId.toNumber(),
      title: x.title,
      level: x.level.toNumber(),
    }));
  },
};
