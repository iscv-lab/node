import { FastifyReply, FastifyRequest } from "fastify";
import fs from "fs";
import { ipfs } from "~/app";

export const postImage = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  if (!request.image?.at(0)) {
    reply.code(400).send("required image");
    return;
  }

  const image = await fs.promises.readFile(request.image.at(0)!);
  if (!image) {
    reply.code(400).send("not found image");
  }
  const { cid } = await ipfs.add(image);

  reply.code(200).send(cid.toString());
};
