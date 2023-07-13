import { ethers } from 'ethers';
import { BusinessController__factory } from '~typechain/index';

export const useBusiness = (provider: ethers.providers.WebSocketProvider | ethers.providers.JsonRpcProvider) => {
  return BusinessController__factory.connect(process.env.BUSINESS_ADDRESS, provider);
};
