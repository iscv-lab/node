import { Schema, model } from "mongoose";

export type IEmployeeMessages = {
  _id: Schema.Types.ObjectId;
  businessId: number;
  employeeId: number;
  date: number;
  type: Boolean;
  content: String;
};

const EmployeeMessagesSchema = new Schema<IEmployeeMessages>({
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
export const EmployeeMessages = model<IEmployeeMessages>(
  "employeeMessages",
  EmployeeMessagesSchema
);
