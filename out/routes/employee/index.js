import iig from './iig.js';
import profile from './profile.js';
import messages from './messages/index.js';
import interview from './interview/index.js';
import bot from './bot/index.js';

var employee = async (server, options) => {
    await server.register(iig, { prefix: 'iig' });
    await server.register(profile, { prefix: 'profile' });
    await server.register(messages, { prefix: 'messages' });
    await server.register(interview, { prefix: 'interview' });
    await server.register(bot, { prefix: 'bot' });
};

export { employee as default };
