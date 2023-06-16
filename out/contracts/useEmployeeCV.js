import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0xe2B572f6c175b7a486b52A5FD2Bee62Ac6b53407", provider);
};

export { useEmployeeCV };
