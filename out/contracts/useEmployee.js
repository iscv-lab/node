import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect('0xa265e258950992369bBba6eadCe04850bb8b7fB5', provider);
};

export { useEmployee };
