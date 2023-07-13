import socketblock from '../blocks/socketblock.js';
import { Messages } from '../models/messages/Messages.js';
import { ERole } from '../types/index.js';

const messages = (socket) => {
    socket.on('receive', async (args, callback) => {
        const employeeId = Number.isInteger(Number(args.employeeId)) ? Number(args.employeeId) : undefined;
        const businessId = Number.isInteger(Number(args.businessId)) ? Number(args.businessId) : undefined;
        const content = String(args.content);
        // if (!block) return;
        const role = (employeeId !== undefined && employeeId !== null && ERole.EMPLOYEE) ||
            (businessId !== undefined && businessId !== null && ERole.BUSINESS);
        switch (role) {
            case ERole.EMPLOYEE:
                const employeeData = await socketblock.find(employeeId, role);
                const newMessages = new Messages({
                    employeeId,
                    businessId,
                    from: ERole.EMPLOYEE,
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
                    from: ERole.BUSINESS,
                    content: content,
                });
                const result = await newMessages.save();
                socket.to(businessData?.socketIds ?? []).emit('send', {
                    _id: result._id,
                    businessId: result.businessId,
                    employeeId: result.employeeId,
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
            }
        }
    });
};

export { messages };
