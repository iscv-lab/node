import iig from './iig.js';
import profile from './profile.js';

var employee = async (server, options) => {
    await server.register(iig, { prefix: 'iig' });
    await server.register(profile, { prefix: 'profile' });
};

export { employee as default };
