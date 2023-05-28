import 'ethers';
import { BusinessController__factory } from '../typechain/factories/controller/business/BusinessController__factory.js';

const useBusiness = (provider) => {
    return BusinessController__factory.connect("0x2345c54dA4a9b548D336D5C05210DDDE59857e42", provider);
};

export { useBusiness };
