import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';

export type IBigFive = {
  employeeId: number;
  interviewId: Schema.Types.ObjectId;
  isRead?: boolean;
  'Agreeableness Comment': number;
  'Agreeableness Score': number;
  'Conscientiousness Comment': number;
  'Conscientiousness Score': number;
  'Extroversion Comment': number;
  'Extroversion Score': number;
  'Neuroticism Comment': number;
  'Neuroticism Score': number;
  'Openness to Experience Comment': number;
  'Openness to Experience Score': number;
} & IMyDocument;

const bigFiveSchema = new Schema<IBigFive>(
  {
    employeeId: {
      type: Number,
      required: true,
    },
    interviewId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    isRead: {
      type: Boolean,
    },
    'Agreeableness Comment': {
      type: Number,
    },
    'Agreeableness Score': {
      type: Number,
    },
    'Conscientiousness Comment': {
      type: Number,
    },
    'Conscientiousness Score': {
      type: Number,
    },
    'Extroversion Comment': {
      type: Number,
    },
    'Extroversion Score': {
      type: Number,
    },
    'Neuroticism Comment': {
      type: Number,
    },
    'Neuroticism Score': {
      type: Number,
    },
    'Openness to Experience Comment': {
      type: Number,
    },
    'Openness to Experience Score': {
      type: Number,
    },
  },
  { timestamps: true },
);

bigFiveSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const BigFive = model<IBigFive, SoftDeletableModel<IBigFive>>('big_five', bigFiveSchema);
