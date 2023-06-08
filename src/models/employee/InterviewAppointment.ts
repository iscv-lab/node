import { model, Schema } from 'mongoose';

import SoftDeletableModel, { IMyDocument, softDeletePlugin } from '../utils';

export type IInterviewAppointment = {
  employeeId: number;
  applyId: number;
  fromTime: Date;
  toTime: Date;
  isRead?: boolean;
} & IMyDocument;

const interviewAppointmentSchema = new Schema<IInterviewAppointment>(
  {
    employeeId: {
      type: Number,
      required: true,
    },
    applyId: {
      type: Number,
      required: true,
    },
    fromTime: {
      type: Date,
      required: true,
    },
    toTime: {
      type: Date,
      required: true,
    },
    isRead: {
      type: Boolean,
    }
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
