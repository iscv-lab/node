import { ethers } from "ethers";
import { BusinessController__factory } from "~typechain/index";

export const useBusiness = (provider: ethers.providers.JsonRpcProvider) => {
  return BusinessController__factory.connect(
    "0xEf80Fd4BA2902E2b65C6053FdEaA22FA47Cb1bB0",
    provider
  );
};
