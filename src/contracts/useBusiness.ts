import { ethers } from "ethers";
import { BusinessController__factory } from "~typechain/index";

export const useBusiness = (provider: ethers.providers.JsonRpcProvider) => {
  return BusinessController__factory.connect(
    "0x2345c54dA4a9b548D336D5C05210DDDE59857e42",
    provider 
  );
};
