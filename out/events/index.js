import { listenBigfive } from './bigfive.js';

const listenWeb3 = async (wsProvider) => {
    console.log(await wsProvider._ready());
    listenBigfive(wsProvider);
};

export { listenWeb3 };
