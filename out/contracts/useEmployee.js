import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect('0x76f7D51F20c0e58F02bB294775c90966c195b9D6', provider);
};

export { useEmployee };
