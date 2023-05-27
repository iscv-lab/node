import { EmployeeCVController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployeeCV = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeCVController__factory.connect(
    "0xaeD6937156933f0EB295a0061805395bad1Bc1a1",
    provider
  );
};
