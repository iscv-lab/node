import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect(
    "0x2406C50dDD9C85E17DF6D31B2dF4F77759cf6E87",
    provider
  );
};
