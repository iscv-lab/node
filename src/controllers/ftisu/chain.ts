import { ethers } from 'ethers';
import { FastifyReply, FastifyRequest } from 'fastify';
import { Faucet } from '~models/chain/Faucet';

export const getFaucet = async (request: FastifyRequest<{ Querystring: { account: string } }>, reply: FastifyReply) => {
  const isRequested = await Faucet.exists({ updatedAt: { $gte: new Date(Date.now() - 5 * 60 * 1000) } });
  if (isRequested) {
    await reply.code(400).send('you must request one time in 5 minutes');
    return;
  }
  const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_ENDPOINT_HTTP);
  const privateKey = process.env.NODE2_PRIVATE_KEY;
  const signer = new ethers.Wallet(privateKey, provider);
  const recipientAddress = request.query.account;
  const amountToSend = ethers.utils.parseEther('2');
  const transactionObject = {
    to: recipientAddress,
    value: amountToSend,
  };
  const transaction = await signer.sendTransaction(transactionObject);
  const result = await transaction.wait();
  await reply.code(200).send(result);
};
