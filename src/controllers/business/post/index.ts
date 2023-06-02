import { FastifyReply, FastifyRequest } from "fastify";
import { provider } from "~/app";
import { useBusiness } from "~contracts/useBusiness";
import fs from "fs";
import { PostStatus } from "~types/post";
import { Post } from "~models/business/Post";
import { v4 as uuidv4 } from "uuid";
import { IApply } from "~types/business/apply";
import { useEmployee } from "~contracts/useEmployee";
export const getMyPosts = async (
  request: FastifyRequest<{ Params: { userid: number } }>,
  reply: FastifyReply
) => {
  const userid = request.params.userid;
  const result = await Post.find({ businessId: userid });
  reply.code(200).send(result);
};

export const newPost = async (
  request: FastifyRequest<{ Body: { video: any } }>,
  reply: FastifyReply
) => {
  const images = request.form?.image;
  const videos = request.form?.video;
  const businessId = request.form!.businessId as number;
  const content = request.form!.content as string;
  const hashtag = request.form!.hashtag as string;
  const job = request.form!.job as string;
  const status = request.form!.status as number as PostStatus;

  const newPost = new Post();
  newPost.businessId = businessId;
  newPost.content = content;
  newPost.hashtag = hashtag;
  newPost.status = status;
  newPost.job = job;
  const newPostData = await newPost.save();

  await fs.promises.mkdir(`./public/business/post/${newPostData._id}`);

  const imagePipeline = (() => {
    if (!images) return;
    if (Array.isArray(images))
      return images.map(async (value) => {
        const name = uuidv4();
        await fs.promises.writeFile(
          `./public/business/post/${newPostData._id}/${name}`,
          value
        );
        return name;
      });
    else {
      return [
        (async () => {
          const name = uuidv4();
          await fs.promises.writeFile(
            `./public/business/post/${newPostData._id}/${name}.jpeg`,
            images as Buffer
          );
          return name;
        })(),
      ];
    }
  })();

  const videoPipeline = (() => {
    if (!videos) return;
    if (Array.isArray(videos))
      return videos.map(async (value) => {
        const name = uuidv4();
        await fs.promises.writeFile(
          `./public/business/post/${newPostData._id}/${name}`,
          value
        );
        return name;
      });
    else {
      return [
        (async () => {
          const name = uuidv4();
          await fs.promises.writeFile(
            `./public/business/post/${newPostData._id}/${name}.mp4`,
            videos as Buffer
          );
          return name;
        })(),
      ];
    }
  })();

  const [listImages, listVideos] = await Promise.all([
    imagePipeline ? Promise.all(imagePipeline) : undefined,
    videoPipeline ? Promise.all(videoPipeline) : undefined,
  ]);
  newPostData.images = listImages;
  newPostData.videos = listVideos;
  const result = await newPostData.updateOne(newPostData);
  await reply.code(200).send(result);
};

export const getAllApply = async (
  request: FastifyRequest<{ Params: { businessId: number } }>,
  reply: FastifyReply
) => {
  const businessId = request.params.businessId;

  const businessContract = useBusiness(provider);
  const employeeContract = useEmployee(provider);
  const applies = await businessContract.getAllApplies();
  const pipeline = applies
    .filter((x) => x.businessId.eq(businessId))
    .map(async (x) => {
      const [employee, post] = await Promise.all([
        employeeContract.getProfile(x.employeeId),
        Post.findById(x.postId),
      ]);

      return {
        id: x.id.toNumber(),
        employeeId: x.employeeId.toNumber(),
        employeeName: employee.name,
        employeeSourceImage: employee.sourceImage,
        businessId: x.businessId.toNumber(),
        postId: x.postId,
        postContent: post?.content,
        postHashtag: post?.hashtag,
        postJob: post?.job,
        postStatus: post?.status,
        time: x.time.toNumber(),
        status: x.status.toNumber(),
      };
    });
  const result = await Promise.all(pipeline);
  await reply.code(200).send(result);
};
