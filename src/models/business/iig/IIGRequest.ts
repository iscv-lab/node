import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../../utils';
// import mongodb from 'mongodb';
import { PostStatus } from '~types/post';
import { EIIGRequest } from '~types/business/iig';
export enum ERequestStatus {
  NULL,
  WAITING,
  APPROVED,
}

export type IIIGRequest = {
  employeeId: number;
  examId: number;
  certificateType: EIIGRequest;
  status: ERequestStatus;
} & IMyDocument;

const iigRequestSchema = new Schema<IIIGRequest>(
  {
    employeeId: { type: Number, required: true },
    examId: { type: Number, required: true },
    certificateType: { type: String, required: true },
    status: {
      type: Number,
      required: true,
      enum: ERequestStatus,
    },
  },
  { timestamps: true },
);

iigRequestSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const IIGRequest = model<IIIGRequest, SoftDeletableModel<IIIGRequest>>('iig_request', iigRequestSchema);
