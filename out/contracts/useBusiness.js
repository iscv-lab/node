import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect(process.env.BUSINESS_ADDRESS, provider);
};

export { useBusiness };
