import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect("0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690", provider);
};

export { useEmployee };
