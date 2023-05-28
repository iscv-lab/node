import iig from './iig.js';

var employee = async (server, options) => {
    await server.register(iig, { prefix: "iig" });
};

export { employee as default };
