import { ethers } from "ethers";
import { BusinessController__factory } from "~typechain/index";

export const useBusiness = (provider: ethers.providers.JsonRpcProvider) => {
  return BusinessController__factory.connect(
    "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    provider
  );
};
