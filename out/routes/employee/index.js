import profile from './profile/index.js';

var employee = async (server, options) => {
    server.register(profile, { prefix: "profile" });
};

export { employee as default };
