import { bucket } from 'src/app';
import { ImageType } from '~types/image';
import { base64toBuffer } from './base64toBuffer';
import { getListImageName } from './imageName';

export const uploadImage = async (input: string[], pocId: string, prefix: string, startWith = 0) => {
  if (!input) return [];
  const start = input.filter((x) => x === ImageType.URI).length;
  const pipeline = input
    ?.filter((x) => x !== ImageType.URI)
    .map(async (value, index) => {
      const buffer = await base64toBuffer(value);
      const imageName = `${prefix}${start + index + startWith}.jpeg`;
      const file = bucket.file(`${pocId}/${imageName}`);
      await file.save(buffer);
      return imageName;
    });
  await Promise.all(pipeline);
  return await getListImageName(bucket, pocId, `${prefix}`);
};
