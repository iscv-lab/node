import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect("0x8A791620dd6260079BF849Dc5567aDC3F2FdC318", provider);
};

export { useBusiness };
