import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0xd7Ca062e7B6c25a5f3898E39012E77f15835f8b6", provider);
};

export { useEmployeeCV };
