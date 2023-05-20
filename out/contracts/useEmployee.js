import 'ethers';
import { EmployeeController__factory } from '../typechain/factories/controller/employee/EmployeeController__factory.js';

const useEmployee = (provider) => {
    return EmployeeController__factory.connect("0x2345c54dA4a9b548D336D5C05210DDDE59857e42", provider);
};

export { useEmployee };
