import iig from './iig.js';
import profile from './profile.js';
import messages from './messages/index.js';

var employee = async (server, options) => {
    await server.register(iig, { prefix: 'iig' });
    await server.register(profile, { prefix: 'profile' });
    await server.register(messages, { prefix: 'messages' });
};

export { employee as default };
