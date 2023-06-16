import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect('0xAE67De5D2AA245DEFd9B9cBb5C7C2d264dD5206C', provider);
};

export { useEmployee };
