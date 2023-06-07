import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0x23B906124500B0Ad4015F564767F3cc609fF20dE", provider);
};

export { useEmployeeCV };
