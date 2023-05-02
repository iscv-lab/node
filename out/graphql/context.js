const createContext = ({ provider, ipfs, }) => {
    const context = async (request, reply) => {
        return {
            provider,
            ipfs,
        };
    };
    return context;
};
//

export { createContext };
