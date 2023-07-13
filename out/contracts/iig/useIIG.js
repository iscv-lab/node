import { IIGController__factory } from '../../typechain/factories/controller/business/iig/IIGController__factory.js';

const useIIG = (provider) => {
    return IIGController__factory.connect(process.env.IIG_ADDRESS, provider);
};

export { useIIG };
