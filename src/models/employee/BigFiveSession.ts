import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';

export type IBigFiveResult = {
  o: number;
  c: number;
  e: number;
  a: number;
  n: number;
};

export type IBigFiveSession = {
  sessionId: number;
  employeeId: number;
  cid?: string;
  started?: boolean;
  video?: boolean;
  audio?: boolean;
  isRead?: boolean;
  audioResult?: IBigFiveResult;
  videoResult?: IBigFiveResult;
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
    cid: {
      type: String,
    },
    isRead: {
      type: Boolean,
    },
    audioResult: {
      type: {
        o: { type: Number, required: true },
        c: { type: Number, required: true },
        e: { type: Number, required: true },
        a: { type: Number, required: true },
        n: { type: Number, required: true },
      },
    },
    videoResult: {
      type: {
        o: { type: Number, required: true },
        c: { type: Number, required: true },
        e: { type: Number, required: true },
        a: { type: Number, required: true },
        n: { type: Number, required: true },
      },
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
