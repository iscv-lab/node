import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';

export type IBigFiveSession = {
  sessionId: number;
  employeeId: number;
  cid?: string;
  started?: boolean;
  video?: boolean;
  audio?: boolean;
  isRead?: boolean;
} & IMyDocument;

const bigfiveSessionSchema = new Schema<IBigFiveSession>(
  {
    sessionId: {
      type: Number,
      required: true,
    },
    employeeId: {
      type: Number,
      required: true,
    },
    started: {
      type: Boolean,
    },
    video: {
      type: Boolean,
    },
    audio: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

bigfiveSessionSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const BigFiveSession = model<IBigFiveSession, SoftDeletableModel<IBigFiveSession>>(
  'bigfive_session',
  bigfiveSessionSchema,
);
