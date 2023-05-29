import { model, Schema } from "mongoose";

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from "../utils";
// import mongodb from 'mongodb';
import { Document } from "mongoose";

export type IMessages = {
  employeeId?: number;
  businessId?: number;
  content: string;
} & IMyDocument;

const messagesSchema = new Schema<IMessages>(
  {
    businessId: {
      type: Number,
    },
    employeeId: {
      type: Number,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

messagesSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: "deletedAt",
  overrideMethods: true,
});

export const Messages = model<IMessages, SoftDeletableModel<IMessages>>(
  "messages",
  messagesSchema
);
