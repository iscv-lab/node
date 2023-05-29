import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';

const messagesSchema = new Schema({
    businessId: {
        type: Number,
    },
    employeeId: {
        type: Number,
    },
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });
messagesSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: "deletedAt",
    overrideMethods: true,
});
const Messages = model("messages", messagesSchema);

export { Messages };
