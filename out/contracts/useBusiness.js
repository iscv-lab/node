import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect("0xEf80Fd4BA2902E2b65C6053FdEaA22FA47Cb1bB0", provider);
};

export { useBusiness };
