import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';
// import mongodb from 'mongodb';
import { Document } from 'mongoose';
import { ERole } from '~types/index';

export type IMessages = {
  employeeId: number;
  businessId: number;
  from: ERole;
  content: string;
} & IMyDocument;

const messagesSchema = new Schema<IMessages>(
  {
    businessId: {
      type: Number,
      required: true,
    },
    employeeId: {
      type: Number,
      required: true,
    },
    from: {
      type: String,
      enum: ERole,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

messagesSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const Messages = model<IMessages, SoftDeletableModel<IMessages>>('messages', messagesSchema);
