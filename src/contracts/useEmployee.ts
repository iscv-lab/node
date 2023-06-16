import { EmployeeController__factory } from '~typechain/index';
import { ethers } from 'ethers';

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect('0xAE67De5D2AA245DEFd9B9cBb5C7C2d264dD5206C', provider);
};
