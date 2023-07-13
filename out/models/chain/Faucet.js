import { Schema, model } from 'mongoose';
import { softDeletePlugin } from '../utils.js';

const faucetSchema = new Schema({
    account: {
        type: String,
        required: true,
    },
}, { timestamps: true });
faucetSchema.plugin(softDeletePlugin, {
    deletedAtFieldName: 'deletedAt',
    overrideMethods: true,
});
const Faucet = model('faucet', faucetSchema);

export { Faucet };
