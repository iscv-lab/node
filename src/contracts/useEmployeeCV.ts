import { EmployeeCVController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployeeCV = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeCVController__factory.connect(
    "0x1CBaBa95bD5E94cE60CED72393Fa5b115943d072",
    provider
  );
};
