import { EmployeeController__factory } from '~typechain/index';
import { ethers } from 'ethers';

export const useEmployee = (provider: ethers.providers.WebSocketProvider | ethers.providers.JsonRpcProvider) => {
  return EmployeeController__factory.connect(process.env.EMPLOYEE_ADDRESS, provider);
};
