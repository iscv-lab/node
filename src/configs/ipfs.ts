import { create } from "ipfs-http-client";

export const ipfsServer = () => {
  const client = create({
    host: process.env.IPFS_HOST,
    port: Number(process.env.IPFS_PORT),
    protocol: process.env.IPFS_PROTOCOL,
  });
  return { ipfs: client };
};
