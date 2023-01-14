import { ethers } from "ethers";

export interface Context {
  provider: ethers.providers.WebSocketProvider;
}

export const createContext = async (
  provider: ethers.providers.WebSocketProvider
) => {
  return { provider };
};
