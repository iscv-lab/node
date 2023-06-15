import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0x1CBaBa95bD5E94cE60CED72393Fa5b115943d072", provider);
};

export { useEmployeeCV };
