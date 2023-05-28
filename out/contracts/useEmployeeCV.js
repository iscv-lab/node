import 'ethers';
import { EmployeeCVController__factory } from '../typechain/factories/controller/employee/cv/EmployeeCVController__factory.js';

const useEmployeeCV = (provider) => {
    return EmployeeCVController__factory.connect("0xf2760983Cb8de9e302568eF73B0f5602904D008D", provider);
};

export { useEmployeeCV };
