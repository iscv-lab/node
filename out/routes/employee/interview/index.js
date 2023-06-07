import appointment from './appointment.js';

var interview = async (server, options) => {
    await server.register(appointment, { prefix: 'appointment' });
};

export { interview as default };
