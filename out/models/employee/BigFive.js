import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';

const bigFiveSchema = new Schema({
    employeeId: {
        type: Number,
        required: true,
    },
    isRead: {
        type: Boolean,
    },
}, { timestamps: true });
bigFiveSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const BigFive = model('big_five', bigFiveSchema);

export { BigFive };
