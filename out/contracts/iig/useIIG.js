import { IIGController__factory } from '../../typechain/factories/controller/business/iig/IIGController__factory.js';

const useIIG = (provider) => {
    return IIGController__factory.connect("0x31E8fbBA059Bb39683935FbddaeD8BDA34559CD3", provider);
};

export { useIIG };
