import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeController__factory.connect(
    "0x7Dd50F5127Db358fD5Db77841E59D4e5E08217B9",
    provider
  );
};
