import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect("0xFEE3f1F1Ad47006BeBEa0AA443D0D616e259eb63", provider);
};

export { useBusiness };
