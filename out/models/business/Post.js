import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';
import { PostStatus } from '../../types/post/index.js';

const postSchema = new Schema({
    businessId: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
    },
    videos: {
        type: [String],
    },
    content: {
        type: String,
        required: true,
    },
    job: {
        type: String,
    },
    hashtag: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
        enum: PostStatus,
    },
}, { timestamps: true });
postSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const Post = model('business_post', postSchema);

export { Post };
