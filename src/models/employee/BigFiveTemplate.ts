import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';

export type IBigFiveTemplate = {
  bigFiveId: number;
  type: string;
  startScore: number;
  endScore: number;
  comment: string;
} & IMyDocument;

const bigFiveTemplate = new Schema<IBigFiveTemplate>(
  {
    bigFiveId: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    startScore: {
      type: Number,
      required: true,
    },
    endScore: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

bigFiveTemplate.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const BigFiveTemplate = model<IBigFiveTemplate, SoftDeletableModel<IBigFiveTemplate>>(
  'big_five_template',
  bigFiveTemplate,
);
