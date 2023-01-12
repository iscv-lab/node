import { ethers } from "ethers";
import { Request, Response } from "express";
import { Agent } from "http";
import { create, urlSource } from "ipfs-http-client";
import { useEmployee } from "~contracts/index";

export const postAvatar = async (req: Request, res: Response) => {
  try {
    const auth =
      "Basic " +
      Buffer.from(
        "2Jxa8k8BoXm3qcU10oAYOuJkRQG" + ":" + "e2b46edcfcc46e20fd89c54b8f80d9f1"
      ).toString("base64");

    const client = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: auth,
      },
    });
    const { cid } = await client.add("aaa");

    console.log(cid);
    res.status(200).json(cid.toString());
    const id = req.params.id;
    const buffer = req.file?.buffer;
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  res.end();
};

export const all = async (req: Request, res: Response) => {
  try {
    const provider: ethers.providers.WebSocketProvider =
      req.app.get("provider");
    const employeeContract = useEmployee(provider);
    await employeeContract
      .getAllProfile({})
      .then((success) => {
        return success.map((value, index) => ({
          ...value,
          category: value.category.toNumber(),
          id: value.id.toNumber(),
        }));
      })
      .then((success) => res.status(200).json(success));
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  res.end();
};

export const at = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const provider: ethers.providers.WebSocketProvider =
      req.app.get("provider");
    const employeeContract = useEmployee(provider);
    await employeeContract.getAllProfile({}).then((success) => {
      const data = success.find((value, index) => value.id.eq(id));
      if (!data) {
        res.status(404);
        return;
      }
      res.status(200).json({
        ...data,
        category: data.category.toNumber(),
        id: data.id.toNumber(),
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  res.end();
};

export const address = async (req: Request, res: Response) => {
  try {
    const address = req.params.address;
    const provider: ethers.providers.WebSocketProvider =
      req.app.get("provider");
    const employeeContract = useEmployee(provider);
    await employeeContract.getAllProfile({}).then((success) => {
      const data = success.find(
        (value, index) => value.user.toString() == address
      );
      if (!data) {
        res.status(404);
        return;
      }
      res.status(200).json({
        ...data,
        category: data.category.toNumber(),
        id: data.id.toNumber(),
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  res.end();
};
