import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect("0x128A2530256602F28c81a232DbBF77c53dE2E0af", provider);
};

export { useBusiness };
