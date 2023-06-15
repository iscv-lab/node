import { provider } from '../app.js';
import { useEmployee } from '../contracts/useEmployee.js';

const listenBigfive = () => {
    const employeeContract = useEmployee(provider);
    employeeContract.on('AddBigFive', (args) => {
        console.log(args);
    });
};

export { listenBigfive };
