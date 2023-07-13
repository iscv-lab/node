import { EmployeeCVController__factory } from '~typechain/index';
import { ethers } from 'ethers';

export const useEmployeeCV = (provider: ethers.providers.WebSocketProvider | ethers.providers.JsonRpcProvider) => {
  return EmployeeCVController__factory.connect(process.env.EMPLOYEE_CV_ADDRESS, provider);
};
