import { PythonShell } from 'python-shell';
import { provider } from '../../../app.js';
import { useEmployee } from '../../../contracts/useEmployee.js';
import { trim } from '../../../helpers/trimMultipleSpace.js';
import { Post } from '../../../models/business/Post.js';

const social = {
    prediction: async (parent, args, contextValue, info) => {
        const id = args.id;
        const employeeContract = useEmployee(provider);
        const [skills] = await Promise.all([employeeContract.getAllSkill()]);
        //   const employee = employees.find(x=>x.id.eq(id))
        const myskills = skills.filter((skill) => skill.employeeId.eq(id));
        const listSkills = myskills.map((x) => x.title);
        if (listSkills.length == 0) {
            return;
        }
        const listPredict = await PythonShell.run('KNN.py', {
            mode: 'text',
            pythonPath: process.env.PYTHON3,
            pythonOptions: ['-u'],
            scriptPath: './tools/employee/prediction',
            args: [...listSkills], //An argument which can be accessed in the script using sys.argv[1]
        }).then((success) => {
            return success.map((value, index) => {
                return trim(value.replace(/(\[|\/|\]|\(|\)|\'|\")+/g, ' '));
            });
        });
        const result = await Post.find()
            .then(async (success) => {
            return success.map((value, index) => {
                if (!value.job)
                    return undefined;
                const arrItem = value['job'].split(' ');
                for (let i = 0; i < arrItem.length; i++) {
                    for (let j = 0; j < listPredict.length; j++) {
                        if (listPredict[j].toString().toLowerCase().includes(arrItem[i].toString().toLowerCase()))
                            return value;
                    }
                }
            });
        })
            .then((success) => {
            return (success
                //   .filter(
                //     (value, index, self) =>
                //       index === self.findIndex((t) => t?.id === value?.id)
                //   )
                .filter(Boolean));
        })
            // .then((success) =>
            //   success.map((post) => {
            //     return {
            //       id: post!.id.toNumber(),
            //       businessId: post!.businessId,
            //       hashTag: post!.hashtag,
            //       time: post?.createdAt,
            //       content: post!.content,
            //       imageSource: post?.images,
            //       job: post!.job,
            //       status: post!.status,
            //     };
            //   })
            // )
            .catch((error) => {
            console.error(error);
        });
        return result;
    },
};

export { social };
