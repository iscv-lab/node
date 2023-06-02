import socketblock from '../blocks/socketblock.js';
import { Messages } from '../models/messages/Messages.js';
import { ERole } from '../types/index.js';

const messages = (socket) => {
    socket.on('receive', async (args, callback) => {
        const employeeId = Number.isInteger(Number(args.employeeId)) ? Number(args.employeeId) : undefined;
        const businessId = Number.isInteger(Number(args.businessId)) ? Number(args.businessId) : undefined;
        const content = String(args.content);
        const block = await socketblock.findBySocket(socket.id);
        if (!block)
            return;
        const role = block.role;
        switch (role) {
            case ERole.EMPLOYEE:
                const employeeData = await socketblock.find(employeeId, role);
                const newMessages = new Messages({
                    employeeId,
                    businessId,
                    content: content,
                });
                const result = await newMessages.save();
                socket.to(employeeData?.socketIds ?? []).emit('send', {
                    _id: result._id,
                    employeeId: result.employeeId,
                    businessId: result.businessId,
                    role: ERole.EMPLOYEE,
                    content: result.content,
                    time: result.createdAt,
                });
                callback({
                    _id: result._id,
                    role: ERole.EMPLOYEE,
                    content: content,
                    time: result.createdAt,
                });
                break;
            case ERole.BUSINESS: {
                const businessData = await socketblock.find(businessId, role);
                const newMessages = new Messages({
                    businessId,
                    employeeId,
                    content: content,
                });
                const result = await newMessages.save();
                socket.to(businessData?.socketIds ?? []).emit('send', {
                    _id: result._id,
                    businessId: result.businessId,
                    employeeId: result.employeeId,
                    role: ERole.BUSINESS,
                    content: result.content,
                    time: result.createdAt,
                });
                callback({
                    _id: result._id,
                    role: ERole.BUSINESS,
                    content: content,
                    time: result.createdAt,
                });
                break;
            }
        }
    });
};

export { messages };
