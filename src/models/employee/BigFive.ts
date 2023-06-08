import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';

export type IBigFive = {
  employeeId: number;
  interviewId: string;
  isRead?: boolean;
} & IMyDocument;

const bigFiveSchema = new Schema<IBigFive>(
  {
    employeeId: {
      type: Number,
      required: true,
    },
    isRead: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

bigFiveSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const BigFive = model<IBigFive, SoftDeletableModel<IBigFive>>('big_five', bigFiveSchema);
