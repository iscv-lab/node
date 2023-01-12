import { Schema, model } from "mongoose";

export type IBusinessMessages = {
  _id: Schema.Types.ObjectId;
  businessId: number;
  employeeId: number;
  date: number;
  type: Boolean;
  content: String;
};

const BusinessMessagesSchema = new Schema<IBusinessMessages>({
  businessId: {
    type: Number,
    required: true,
  },

  employeeId: {
    type: Number,
    required: true,
  },

  date: {
    type: Number,
    required: true,
  },
  type: {
    type: Boolean,
  },
  content: {
    type: String,
  },
});

export const BusinessMessages = model<IBusinessMessages>(
  "businessMessages",
  BusinessMessagesSchema
);
