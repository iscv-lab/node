import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';
// import mongodb from 'mongodb';

export type IFaucet = {
  account: string;
} & IMyDocument;

const faucetSchema = new Schema<IFaucet>(
  {
    account: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

faucetSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const Faucet = model<IFaucet, SoftDeletableModel<IFaucet>>('faucet', faucetSchema);
