import profile from './profile/index.js';
import posts from './posts/index.js';
import iig from './iig/index.js';
import apply from './apply/index.js';
import messages from './messages/index.js';

var business = async (server, options) => {
    server.register(profile, { prefix: "profile" });
    server.register(posts, { prefix: "posts" });
    server.register(iig, { prefix: "iig" });
    server.register(apply, { prefix: "apply" });
    server.register(messages, { prefix: "messages" });
};

export { business as default };
