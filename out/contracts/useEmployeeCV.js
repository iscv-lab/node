import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0xaeD6937156933f0EB295a0061805395bad1Bc1a1", provider);
};

export { useEmployeeCV };
