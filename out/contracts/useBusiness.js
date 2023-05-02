import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect("0x610178dA211FEF7D417bC0e6FeD39F05609AD788", provider);
};

export { useBusiness };
