import { EmployeeCVController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployeeCV = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeCVController__factory.connect(
    "0xf2760983Cb8de9e302568eF73B0f5602904D008D",
    provider
  );
};
