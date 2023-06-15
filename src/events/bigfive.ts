import { provider } from '~/app';
import { useEmployee } from '~contracts/useEmployee';

export const listenBigfive = () => {
  const employeeContract = useEmployee(provider);
  employeeContract.on('AddBigFive', (args) => {
    console.log(args);
  });
};
