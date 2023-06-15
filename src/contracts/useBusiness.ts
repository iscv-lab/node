import { ethers } from "ethers";
import { BusinessController__factory } from "~typechain/index";

export const useBusiness = (provider: ethers.providers.WebSocketProvider) => {
  return BusinessController__factory.connect(
    "0xFEE3f1F1Ad47006BeBEa0AA443D0D616e259eb63",
    provider 
  );
};
