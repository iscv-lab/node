import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect("0xEe725f643b9732766B9f97165854F8543A2C59f2", provider);
};

export { useEmployee };
