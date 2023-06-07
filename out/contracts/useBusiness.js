import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect("0x2e5a5163D607aBaDeA2378E795690c8001BFBcdC", provider);
};

export { useBusiness };
