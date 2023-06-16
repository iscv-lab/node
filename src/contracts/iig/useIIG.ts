import { ethers } from "ethers";
import { IIGController__factory } from "../../typechain/factories/controller/business/iig/IIGController__factory";

export const useIIG = (provider: ethers.providers.JsonRpcProvider) => {
  return IIGController__factory.connect(
    "0x046060F09AB091aC7e3B6B3a82F54D7bc8c66551",
    provider
  );
};
