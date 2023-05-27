import image from './image.js';
import ipfs from './ipfs.js';

var common = async (server, options) => {
    server.register(image, { prefix: "image" });
    server.register(ipfs, { prefix: "ipfs" });
};

export { common as default };
