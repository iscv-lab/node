import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect("0xf2760983Cb8de9e302568eF73B0f5602904D008D", provider);
};

export { useEmployee };
