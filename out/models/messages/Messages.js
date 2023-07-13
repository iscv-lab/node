import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';
import { ERole } from '../../types/index.js';

const messagesSchema = new Schema({
    businessId: {
        type: Number,
        required: true,
    },
    employeeId: {
        type: Number,
        required: true,
    },
    from: {
        type: String,
        enum: ERole,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });
messagesSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const Messages = model('messages', messagesSchema);

export { Messages };
