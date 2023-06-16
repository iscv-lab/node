import { EmployeeController__factory } from '~typechain/index';
import { ethers } from 'ethers';

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect('0x3c9133Fc4BCcfFD4d490F006379178b122F23C34', provider);
};
