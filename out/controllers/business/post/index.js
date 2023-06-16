import fs from 'fs';
import { v4 } from 'uuid';
import { provider } from '../../../app.js';
import { useBusiness } from '../../../contracts/useBusiness.js';
import { useEmployee } from '../../../contracts/useEmployee.js';
import { Post } from '../../../models/business/Post.js';
import { quickSort } from '../../../utils/quickSort.js';

const getMyPosts = async (request, reply) => {
    const userid = request.params.userid;
    const result = await Post.find({ businessId: userid });
    await reply.code(200).send(result);
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
const getAllApply = async (request, reply) => {
    const businessId = request.params.businessId;
    const businessContract = useBusiness(provider);
    const employeeContract = useEmployee(provider);
    const applies = await businessContract.getAllApplies();
    const pipeline = applies
        .filter((x) => x.businessId.eq(businessId))
        .map(async (x) => {
        const [employee, post] = await Promise.all([employeeContract.getProfile(x.employeeId), Post.findById(x.postId)]);
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
    const addedData = await Promise.all(pipeline);
    const result = quickSort(addedData, (a, b) => b.time - a.time);
    await reply.code(200).send(result);
};
const getPost = async (request, reply) => {
    const postId = request.params.post_id;
    const result = await Post.findById(postId);
    await reply.code(200).send(result);
};

export { getAllApply, getMyPosts, getPost, newPost };
