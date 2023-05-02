import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6", provider);
};

export { useEmployeeCV };
