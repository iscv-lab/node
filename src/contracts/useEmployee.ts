import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeController__factory.connect(
    "0xf2760983Cb8de9e302568eF73B0f5602904D008D",
    provider
  );
};
