import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../../utils.js';

var ERequestStatus;
(function (ERequestStatus) {
    ERequestStatus[ERequestStatus["NULL"] = 0] = "NULL";
    ERequestStatus[ERequestStatus["WAITING"] = 1] = "WAITING";
    ERequestStatus[ERequestStatus["APPROVED"] = 2] = "APPROVED";
})(ERequestStatus || (ERequestStatus = {}));
const iigRequestSchema = new Schema({
    employeeId: { type: Number, required: true },
    examId: { type: Number, required: true },
    certificateType: { type: String, required: true },
    status: {
        type: Number,
        required: true,
        enum: ERequestStatus,
    },
}, { timestamps: true });
iigRequestSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const IIGRequest = model('iig_request', iigRequestSchema);

export { ERequestStatus, IIGRequest };
