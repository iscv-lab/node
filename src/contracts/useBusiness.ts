import { ethers } from "ethers";
import { BusinessController__factory } from "~typechain/index";

export const useBusiness = (provider: ethers.providers.WebSocketProvider) => {
  return BusinessController__factory.connect(
    "0x128A2530256602F28c81a232DbBF77c53dE2E0af",
    provider 
  );
};
