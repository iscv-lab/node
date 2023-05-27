import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeController__factory.connect(
    "0xEe725f643b9732766B9f97165854F8543A2C59f2",
    provider
  );
};
