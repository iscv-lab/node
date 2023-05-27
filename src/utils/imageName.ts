import { Bucket } from '@google-cloud/storage';

export const getListImageName = async (bucket: Bucket, pocId: string, startWith: string) => {
  const [list] = await bucket.getFiles({
    prefix: pocId,
  });
  return list
    .map((item) => {
      const imageName = item.name;
      const imageNameSplit = imageName.split('/');
      if (imageNameSplit.length < 2) return;
      if (pocId !== imageNameSplit[0]) return;
      const image = imageNameSplit[1];
      if (!image?.startsWith(startWith)) return;
      return image;
    })
    .filter((x) => Boolean(x)) as string[];
};
