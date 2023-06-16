import { EmployeeController__factory } from '~typechain/index';
import { ethers } from 'ethers';

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect('0xA71Ec2c58adcfB4ACB051EFB5Eb3aA3B38C3Ba7e', provider);
};
