import { EmployeeController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployee = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeController__factory.connect(
    "0x2345c54dA4a9b548D336D5C05210DDDE59857e42",
    provider
  );
};
