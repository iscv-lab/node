import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeController__factory.connect(
    "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
    provider
  );
};
