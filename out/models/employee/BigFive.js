import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';

const bigFiveSchema = new Schema({
    employeeId: {
        type: Number,
        required: true,
    },
    interviewId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    isRead: {
        type: Boolean,
    },
    'Agreeableness Comment': {
        type: String,
    },
    'Agreeableness Score': {
        type: Number,
    },
    'Conscientiousness Comment': {
        type: String,
    },
    'Conscientiousness Score': {
        type: Number,
    },
    'Extroversion Comment': {
        type: String,
    },
    'Extroversion Score': {
        type: Number,
    },
    'Neuroticism Comment': {
        type: String,
    },
    'Neuroticism Score': {
        type: Number,
    },
    'Openness to Experience Comment': {
        type: String,
    },
    'Openness to Experience Score': {
        type: Number,
    },
}, { timestamps: true });
bigFiveSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const BigFive = model('big_five', bigFiveSchema);

export { BigFive };
