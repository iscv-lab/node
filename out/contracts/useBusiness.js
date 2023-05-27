import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect("0xcba59fCe6fC90230f343E390b22aD95B759742B5", provider);
};

export { useBusiness };
