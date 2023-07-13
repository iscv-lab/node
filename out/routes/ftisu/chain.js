import { getFaucet } from '../../controllers/ftisu/chain.js';

var chain = async (server) => {
    server.get('/faucet', { schema: { querystring: { type: 'object', properties: { account: { type: 'string' } }, required: ['account'] } } }, getFaucet);
};

export { chain as default };
