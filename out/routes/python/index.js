import bigfive from './bigfive.js';

var python = async (server) => {
    server.register(bigfive, { prefix: 'big_five' });
};

export { python as default };
