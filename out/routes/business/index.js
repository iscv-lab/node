import profile from './profile/index.js';
import posts from './posts/index.js';

var business = async (server, options) => {
    server.register(profile, { prefix: "profile" });
    server.register(posts, { prefix: "posts" });
};

export { business as default };
