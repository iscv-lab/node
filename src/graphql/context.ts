import { ethers } from 'ethers';
import { ApolloFastifyContextFunction } from '@as-integrations/fastify';
import { RawServerBase } from 'fastify/types/utils';
import { BaseContext } from '@apollo/server';
import { IPFSHTTPClient } from 'ipfs-http-client/dist/src/types';

type NewType = {
  provider: ethers.providers.WebSocketProvider | ethers.providers.JsonRpcProvider;
  ipfs: IPFSHTTPClient;
};

export type Context = NewType & BaseContext;

export const createContext = ({
  provider,
  ipfs,
}: {
  provider: ethers.providers.WebSocketProvider | ethers.providers.JsonRpcProvider;
  ipfs: IPFSHTTPClient;
}) => {
  const context: ApolloFastifyContextFunction<Context> = async (request, reply) => {
    return {
      provider,
      ipfs,
    };
  };
  return context;
};
//
