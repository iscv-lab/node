import { EmployeeController__factory } from '~typechain/index';
import { ethers } from 'ethers';

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect('0x76f7D51F20c0e58F02bB294775c90966c195b9D6', provider);
};
