import post from './post/index.js';

var shared = async (server, options) => {
    server.register(post, { prefix: "post" });
};

export { shared as default };
