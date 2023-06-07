import { ethers } from "ethers";
import { BusinessController__factory } from "~typechain/index";

export const useBusiness = (provider: ethers.providers.JsonRpcProvider) => {
  return BusinessController__factory.connect(
    "0x2e5a5163D607aBaDeA2378E795690c8001BFBcdC",
    provider 
  );
};
