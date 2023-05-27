import fs from 'fs';
import { Post } from '../../../models/business/Post.js';
import { v4 } from 'uuid';

const getMyPosts = async (request, reply) => {
    const userid = request.params.userid;
    const result = await Post.find({ businessId: userid });
    reply.code(200).send(result);
};
const newPost = async (request, reply) => {
    const images = request.form?.image;
    const videos = request.form?.video;
    const businessId = request.form.businessId;
    const content = request.form.content;
    const hashtag = request.form.hashtag;
    const job = request.form.job;
    const status = request.form.status;
    const newPost = new Post();
    newPost.businessId = businessId;
    newPost.content = content;
    newPost.hashtag = hashtag;
    newPost.status = status;
    newPost.job = job;
    const newPostData = await newPost.save();
    await fs.promises.mkdir(`./public/business/post/${newPostData._id}`);
    const imagePipeline = (() => {
        if (!images)
            return;
        if (Array.isArray(images))
            return images.map(async (value) => {
                const name = v4();
                await fs.promises.writeFile(`./public/business/post/${newPostData._id}/${name}`, value);
                return name;
            });
        else {
            return [
                (async () => {
                    const name = v4();
                    await fs.promises.writeFile(`./public/business/post/${newPostData._id}/${name}.jpeg`, images);
                    return name;
                })(),
            ];
        }
    })();
    const videoPipeline = (() => {
        if (!videos)
            return;
        if (Array.isArray(videos))
            return videos.map(async (value) => {
                const name = v4();
                await fs.promises.writeFile(`./public/business/post/${newPostData._id}/${name}`, value);
                return name;
            });
        else {
            return [
                (async () => {
                    const name = v4();
                    await fs.promises.writeFile(`./public/business/post/${newPostData._id}/${name}.mp4`, videos);
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

export { getMyPosts, newPost };
