import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0x95eC1741BBEAe28eeb81433075fae80d2Dc03E40", provider);
};

export { useEmployeeCV };
