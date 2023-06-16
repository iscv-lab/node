import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';

export type IInterviewAppointment = {
  employeeId: number;
  businessId: number;
  applyId: number;
  time: Date;
  isRead?: boolean;
} & IMyDocument;

const interviewAppointmentSchema = new Schema<IInterviewAppointment>(
  {
    employeeId: {
      type: Number,
      required: true,
    },
    businessId: {
      type: Number,
      required: true,
    },
    applyId: {
      type: Number,
      required: true,
    },
    time: {
      type: Date,
      required: true,
    },

    isRead: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

interviewAppointmentSchema.plugin(softDeletePlugin, {
  deletedAtFieldName: 'deletedAt',
  overrideMethods: true,
});

export const InterviewAppointment = model<IInterviewAppointment, SoftDeletableModel<IInterviewAppointment>>(
  'interview_appointment',
  interviewAppointmentSchema,
);
