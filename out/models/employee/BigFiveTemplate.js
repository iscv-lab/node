import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';

const bigFiveTemplate = new Schema({
    bigFiveId: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    startScore: {
        type: Number,
        required: true,
    },
    endScore: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
}, { timestamps: true });
bigFiveTemplate.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const BigFiveTemplate = model('big_five_template', bigFiveTemplate);

export { BigFiveTemplate };
