import { provider } from '~/app';
import { useEmployee } from '~contracts/useEmployee';
import { Context } from '~graphql/context';
import { Post } from '~models/business/Post';
import { postRecommend } from '~python/job/recommend';

export const social = {
  prediction: async (parent, args: { id: number }, contextValue: Context, info) => {
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

    const result = await Post.find({}, {}, { sort: { createdAt: -1 } })
      .then(async (success) => {
        return success.map((value) => {
          if (!value.hashtag) return undefined;
          const arrItem = value['hashtag'].split(' ');
          for (let i = 0; i < arrItem.length; i++) {
            for (let j = 0; j < listPredict.length; j++) {
              if (listPredict[j].toString().toLowerCase().includes(arrItem[i].toString().toLowerCase())) return value;
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
