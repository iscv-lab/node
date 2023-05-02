import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeController__factory.connect(
    "0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690",
    provider
  );
};
