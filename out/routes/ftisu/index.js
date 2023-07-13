import chain from './chain.js';

var ftisu = async (server) => {
    server.register(chain, { prefix: 'chain' });
};

export { ftisu as default };
