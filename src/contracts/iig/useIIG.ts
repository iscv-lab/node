import { ethers } from "ethers";
import { IIGController__factory } from "../../typechain/factories/controller/business/iig/IIGController__factory";

export const useIIG = (provider: ethers.providers.JsonRpcProvider) => {
  return IIGController__factory.connect(
    "0xdeAdC91Bc53E0613b1aC4820A70b4962a27EF323",
    provider
  );
};
