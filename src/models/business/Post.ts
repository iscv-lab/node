import { model, Schema } from "mongoose";

import SoftDeletableModel, { softDeletePlugin } from "../utils";
// import mongodb from 'mongodb';
import { Document } from "mongoose";
import { PostStatus } from "~types/post";

export type IUser = {
  _id: Schema.Types.ObjectId;
  businessId: number;
  images?: string[];
  videos?: string[];
  content: string;
  hashtag: string;
  job?: string;
  status: PostStatus;
  createdAt: Date;
  updatedAt: Date;
  __v?: number;
} & Document;

const userSchema = new Schema<IUser>(
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
  { timestamps: true }
);

userSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: "deletedAt",
  overrideMethods: true,
});

export const Post = model<IUser, SoftDeletableModel<IUser>>(
  "business_post",
  userSchema
);
