import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.WebSocketProvider) => {
  return EmployeeController__factory.connect(
    "0x7b43cAb6B30ca97B3C767d3fd550F233A39CA633",
    provider
  );
};
