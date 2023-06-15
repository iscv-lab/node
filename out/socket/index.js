import { createAdapter } from '@socket.io/redis-adapter';
import { app } from '../app.js';
import socketblock from '../blocks/socketblock.js';
import { ERole } from '../types/index.js';
import { messages } from './messages.js';
import { interview } from './interview.js';

const initSocket = (pubClient, subClient) => {
    app.ready().then(() => {
        app.io.adapter(createAdapter(pubClient, subClient));
        app.io.on('connection', async (socket) => {
            console.log(`Client main ${socket.id} connected.`);
            const employeeId = Number(socket.handshake.query['employeeId']);
            const businessId = Number(socket.handshake.query['businessId']);
            const id = Number.isInteger(employeeId) ? employeeId : Number.isInteger(businessId) ? businessId : undefined;
            const role = Number.isInteger(employeeId)
                ? ERole.EMPLOYEE
                : Number.isInteger(businessId)
                    ? ERole.BUSINESS
                    : undefined;
            if (role === undefined)
                return;
            if (id === undefined)
                return;
            await socketblock.add(id, socket.id, role);
            messages(socket);
            interview(socket);
            socket.on('disconnect', async () => {
                console.log(`Client main ${socket.id} disconnected.`);
            });
        });
    });
};

export { initSocket };
