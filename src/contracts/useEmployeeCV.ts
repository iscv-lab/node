import { EmployeeCVController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployeeCV = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeCVController__factory.connect(
    "0xeE8Ea3896F0707Cb4c89167f1Bc6C638b8E99c25",
    provider
  );
};
