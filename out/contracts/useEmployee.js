import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect("0x7Dd50F5127Db358fD5Db77841E59D4e5E08217B9", provider);
};

export { useEmployee };
