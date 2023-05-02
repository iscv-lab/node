import { FastifyReply, FastifyRequest } from "fastify";
import { PythonShell } from "python-shell";
import { provider } from "~/app";
import { useBusiness } from "~contracts/useBusiness";
import { useEmployee } from "~contracts/useEmployee";
import { Context } from "~graphql/context";
import { trim } from "~helpers/trimMultipleSpace";

export const social = {
  prediction: async (
    parent,
    args: { id: number },
    contextValue: Context,
    info
  ) => {
    const id = args.id;
    const employeeContract = useEmployee(provider);
    const businessContract = useBusiness(provider);
    const [skills, businesses] = await Promise.all([
      employeeContract.getAllSkill(),
      businessContract.getAllProfile(),
    ]);
    //   const employee = employees.find(x=>x.id.eq(id))
    const myskills = skills.filter((skill) => skill.employeeId.eq(id));
    const listSkills = myskills.map((x) => x.title);
    if (listSkills.length == 0) {
      console.log("first");
      return;
    }

    const listPredict = await PythonShell.run("KNN.py", {
      mode: "text",
      pythonPath: process.env.PYTHON3,
      pythonOptions: ["-u"], // get print results in real-time
      scriptPath: "./tools/employee/prediction", //If you are having python_test.py script in same folder, then it's optional.
      args: [...listSkills], //An argument which can be accessed in the script using sys.argv[1]
    }).then((success) => {
      return success.map((value, index) => {
        return trim(value.replace(/(\[|\/|\]|\(|\)|\'|\")+/g, " "));
      });
    });

    const result = await businessContract
      .getAllPosts()
      .then(async (success) => {
        return success.map((value, index) => {
          let arrItem = value["job"].split(" ");
          for (let i = 0; i < arrItem.length; i++) {
            for (let j = 0; j < listPredict.length; j++) {
              if (
                listPredict[j]
                  .toString()
                  .toLowerCase()
                  .includes(arrItem[i].toString().toLowerCase())
              )
                return value;
            }
          }
        });
      })
      .then((success) => {
        return (
          success
            //   .filter(
            //     (value, index, self) =>
            //       index === self.findIndex((t) => t?.id === value?.id)
            //   )
            .filter(Boolean)
        );
      })
      .then((success) =>
        success.map((post) => {
          return {
            id: post!.id.toNumber(),
            businessId: post!.businessId.toNumber(),
            hashTag: post!.hashTag,
            time: new Date(post!.time.toNumber() * 1000),
            content: post!.content,
            imageSource: post!.imageSource,
            job: post!.job,
            status: post!.status,
          };
        })
      )
      .catch((error) => {
        console.error(error);
      });
    return result;
  },
};
