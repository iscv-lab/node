import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';

export type IBigFive = {
  employeeId: number;
  interviewId: Schema.Types.ObjectId;
  isRead?: boolean;
  'Agreeableness Comment': string;
  'Agreeableness Score': number;
  'Conscientiousness Comment': string;
  'Conscientiousness Score': number;
  'Extroversion Comment': string;
  'Extroversion Score': number;
  'Neuroticism Comment': string;
  'Neuroticism Score': number;
  'Openness to Experience Comment': string;
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
      type: String,
    },
    'Agreeableness Score': {
      type: Number,
    },
    'Conscientiousness Comment': {
      type: String,
    },
    'Conscientiousness Score': {
      type: Number,
    },
    'Extroversion Comment': {
      type: String,
    },
    'Extroversion Score': {
      type: Number,
    },
    'Neuroticism Comment': {
      type: String,
    },
    'Neuroticism Score': {
      type: Number,
    },
    'Openness to Experience Comment': {
      type: String,
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
