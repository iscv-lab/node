import { ethers } from "ethers";
import { BusinessController__factory } from "~typechain/index";

export const useBusiness = (provider: ethers.providers.JsonRpcProvider) => {
  return BusinessController__factory.connect(
    "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
    provider
  );
};
