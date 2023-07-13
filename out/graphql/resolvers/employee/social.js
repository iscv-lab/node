import { provider } from '../../../app.js';
import { useEmployee } from '../../../contracts/useEmployee.js';
import { Post } from '../../../models/business/Post.js';
import { postRecommend } from '../../../python/job/recommend.js';

const social = {
    prediction: async (parent, args, contextValue, info) => {
        const id = args.id;
        const employeeContract = useEmployee(provider);
        const [skills] = await Promise.all([employeeContract.getAllSkill()]);
        //   const employee = employees.find(x=>x.id.eq(id))
        const myskills = skills.filter((skill) => skill.employeeId.eq(id));
        const listSkills = myskills.map((x) => x.title.toUpperCase());
        if (listSkills.length == 0) {
            return;
        }
        const listPredict = await postRecommend(listSkills).then((success) => success.data);
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
            return success.filter(Boolean);
        })
            .catch((error) => {
            console.error(error);
        });
        return result;
    },
};

export { social };
