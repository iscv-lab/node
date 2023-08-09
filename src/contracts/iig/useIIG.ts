import { ethers } from 'ethers';
import { IIGController__factory } from '../../typechain/factories/controller/business/iig/IIGController__factory';

export const useIIG = (provider: ethers.providers.JsonRpcProvider) => {
  return IIGController__factory.connect(process.env.IIG_ADDRESS, provider);
};
