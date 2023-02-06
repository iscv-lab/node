import { ethers } from "ethers";
import { Request, Response } from "express";
import { Agent } from "http";
import { create, urlSource } from "ipfs-http-client";
import { useEmployee } from "~contracts/index";
import { resize } from "~helpers/imageHandler";

export const postAvatar = async (req: Request, res: Response) => {
  try {
    const buffer = req.file.buffer;
    let sharp = resize(buffer, 1000, 1000);
    const client = create({
      host: process.env.IPFS_HOST,
      port: Number(process.env.IPFS_PORT),
      protocol: process.env.IPFS_PROTOCOL,
    });
    // const auth =
    //   "Basic " +
    //   Buffer.from(
    //     "2Jxa8k8BoXm3qcU10oAYOuJkRQG" + ":" + "e2b46edcfcc46e20fd89c54b8f80d9f1"
    //   ).toString("base64");

    // const client = create({
    //   host: "ipfs.infura.io",
    //   port: 5001,
    //   protocol: "https",
    //   headers: {
    //     authorization: auth,
    //   },
    // });
    const { cid } = await client.add(sharp);
    res.status(200).json(cid.toString());
    console.log(cid);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  res.end();
};

export const getAvatar = async (req: Request, res: Response) => {
  try {
    const cid = req.params.cid;

    const client = create({
      host: process.env.IPFS_HOST,
      port: Number(process.env.IPFS_PORT),
      protocol: process.env.IPFS_PROTOCOL,
    });

    const data = client.get(cid);
    console.log(data);
    res.status(200).json(data);
    console.log(cid);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  res.end();
};
