import Hash from 'typestub-ipfs-only-hash';

// eslint-disable-next-line @typescript-eslint/ban-types
const toCID = async (data) => {
    const hash = await Hash.of(data);
    return hash;
};

export { toCID };
