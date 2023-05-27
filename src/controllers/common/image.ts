import { FastifyReply, FastifyRequest } from "fastify";
import fs from "fs";
import { ipfs } from "~/app";

export const postImage = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const image = request.form?.image as Buffer | undefined;
  if (!image) {
    reply.code(400).send("required image");
    return;
  }

  const { cid } = await ipfs.add(image);

  reply.code(200).send(cid.toString());
};
