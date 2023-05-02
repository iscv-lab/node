import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect("0xa513E6E4b8f2a923D98304ec87F64353C4D5C853", provider);
};

export { useEmployee };
