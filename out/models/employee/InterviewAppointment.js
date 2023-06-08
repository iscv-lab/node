import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';

const interviewAppointmentSchema = new Schema({
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
}, { timestamps: true });
interviewAppointmentSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const InterviewAppointment = model('interview_appointment', interviewAppointmentSchema);

export { InterviewAppointment };
