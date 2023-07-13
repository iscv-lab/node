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
}, { timestamps: true });
bigfiveSessionSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const BigFiveSession = model('bigfive_session', bigfiveSessionSchema);

export { BigFiveSession };
