import profile from './profile/index.js';
import posts from './posts/index.js';
import iig from './iig/index.js';

var business = async (server, options) => {
    server.register(profile, { prefix: "profile" });
    server.register(posts, { prefix: "posts" });
    server.register(iig, { prefix: "iig" });
};

export { business as default };
