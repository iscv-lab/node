import { Request, Response } from "express";
import { FastifyReply, FastifyRequest } from "fastify";
import { ipfs } from "~/app";
import fs from "fs";

export const postAvatar = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  if (!request.image?.at(0)) return;

  const image = await fs.promises.readFile(request.image.at(0)!);
  if (!image) return;
  const { cid } = await ipfs.add(image);

  reply.code(200).send(cid.toString());
};

// export const getAvatar = async (req: Request, res: Response) => {
//   try {
//     const cid = req.params.cid;

//     const client = create({
//       host: process.env.IPFS_HOST,
//       port: Number(process.env.IPFS_PORT),
//       protocol: process.env.IPFS_PROTOCOL,
//     });

//     const data = client.get(cid);
//     console.log(data);
//     res.status(200).json(data);
//     console.log(cid);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(error);
//   }
//   res.end();
// };
