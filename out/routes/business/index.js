import profile from './profile/index.js';
import posts from './posts/index.js';
import iig from './iig/index.js';
import apply from './apply/index.js';
import messages from './messages/index.js';
import bigfive from './bigfive/index.js';

var business = async (server, options) => {
    server.register(profile, { prefix: 'profile' });
    server.register(posts, { prefix: 'posts' });
    server.register(iig, { prefix: 'iig' });
    server.register(apply, { prefix: 'apply' });
    server.register(messages, { prefix: 'messages' });
    server.register(bigfive, { prefix: 'bigfive' });
};

export { business as default };
