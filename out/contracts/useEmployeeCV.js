import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0xE609A05Ba940A445010c22192C70699E69ebd023", provider);
};

export { useEmployeeCV };
