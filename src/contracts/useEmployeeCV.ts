import { EmployeeCVController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployeeCV = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeCVController__factory.connect(
    "0xE609A05Ba940A445010c22192C70699E69ebd023",
    provider
  );
};
