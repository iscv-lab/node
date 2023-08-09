import { ethers } from 'ethers';
import { listenBigfive } from './bigfive';

export const listenWeb3 = async (wsProvider: ethers.providers.WebSocketProvider) => {
  console.log(await wsProvider._ready());
  listenBigfive(wsProvider);
};
