import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';
// import mongodb from 'mongodb';
import { Document } from 'mongoose';
import { PostStatus } from '~types/post';

export type IPost = {
  businessId: number;
  images?: string[];
  videos?: string[];
  content: string;
  hashtag: string;
  job?: string;
  status: PostStatus;
} & IMyDocument;

const postSchema = new Schema<IPost>(
  {
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
  },
  { timestamps: true },
);

postSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const Post = model<IPost, SoftDeletableModel<IPost>>('business_post', postSchema);
