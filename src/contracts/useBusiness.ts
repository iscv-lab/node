import { ethers } from "ethers";
import { BusinessController__factory } from "~typechain/index";

export const useBusiness = (provider: ethers.providers.JsonRpcProvider) => {
  return BusinessController__factory.connect(
    "0xcba59fCe6fC90230f343E390b22aD95B759742B5",
    provider 
  );
};
