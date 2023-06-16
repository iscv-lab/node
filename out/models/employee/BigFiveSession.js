import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';

const bigfiveSessionSchema = new Schema({
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
}, { timestamps: true });
bigfiveSessionSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const BigFiveSession = model('bigfive_session', bigfiveSessionSchema);

export { BigFiveSession };
