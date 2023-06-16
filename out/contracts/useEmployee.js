import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect('0x3c9133Fc4BCcfFD4d490F006379178b122F23C34', provider);
};

export { useEmployee };
