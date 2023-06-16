import iig from './iig.js';
import profile from './profile.js';
import messages from './messages/index.js';
import bot from './bot/index.js';
import bigfive from './bigfive/index.js';
import appointment from './appointment/index.js';
import search from './search/index.js';

var employee = async (server, options) => {
    await server.register(iig, { prefix: 'iig' });
    await server.register(profile, { prefix: 'profile' });
    await server.register(messages, { prefix: 'messages' });
    await server.register(appointment, { prefix: 'appointment' });
    await server.register(bot, { prefix: 'bot' });
    await server.register(bigfive, { prefix: 'bigfive' });
    await server.register(search, { prefix: 'search' });
};

export { employee as default };
