import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0xb5CD614893bA24e46017f0deD73B51DB213F062e", provider);
};

export { useEmployeeCV };
