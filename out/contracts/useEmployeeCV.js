import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0xeE8Ea3896F0707Cb4c89167f1Bc6C638b8E99c25", provider);
};

export { useEmployeeCV };
