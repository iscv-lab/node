import { EmployeeCVController__factory } from "~typechain/index";
import { ethers } from "ethers";

export const useEmployeeCV = (provider: ethers.providers.JsonRpcProvider) => {
  return EmployeeCVController__factory.connect(
    "0xd7Ca062e7B6c25a5f3898E39012E77f15835f8b6",
    provider
  );
};
