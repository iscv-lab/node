import { EmployeeCVController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployeeCV = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeCVController__factory.connect(
    "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    provider
  );
};
