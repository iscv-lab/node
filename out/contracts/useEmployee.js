import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect('0xA71Ec2c58adcfB4ACB051EFB5Eb3aA3B38C3Ba7e', provider);
};

export { useEmployee };
