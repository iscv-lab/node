import { DoneFuncWithErrOrRes, FastifyReply, FastifyRequest } from "fastify";
import sharp from "sharp";
import fs from "fs";
import pump from "pump";
import { v4 as uuidv4 } from "uuid";

declare module "fastify" {
  interface FastifyRequest {
    image?: string[];
  }
}

export const imageMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply,
  done: DoneFuncWithErrOrRes
) => {
  const pm = new Promise<string[]>((resolve, reject) => {
    const image: any = [];
    const mp = request.multipart(handler, function (err) {
      if (err) {
        reply.send(err);
        return;
      }
      console.log("upload completed " + process.memoryUsage().rss);
    });

    mp.on("field", function (key, value) {
      console.log("form-data", key, value);
    });

    const imageBuffers: any = [];

    function handler(field, file, filename, encoding, mimetype) {
      const chunks: any = [];
      file.on("data", (chunk) => {
        chunks.push(chunk);
      });
      file.on("end", async () => {
        const buffer = Buffer.concat(chunks);
        const resizedBuffer = await sharp(buffer)
          .resize({ height: 1000, width: 1000, fit: "contain" })
          .jpeg({ quality: 80 })
          .rotate()
          .toBuffer();
        imageBuffers.push(resizedBuffer);
      });
      const imageName = `./uploads/${uuidv4()}.jpeg`;
      image.push(imageName);
      const saveStream = fs.createWriteStream(imageName);
      saveStream.on("close", async () => {
        // Do something with the saved image
      });
      pump(file, saveStream);
    }
    mp.on("error", (error) => {
      reject(error);
    });

    mp.on("finish", async () => {
      // Do something with the resized image bufferss
      resolve(image);
    });
  });
  await pm
    .then((success) => {
      request.image = success;
      done();
    })
    .catch((error) => {
      reply.status(500).send(error);
    });
};

export const removeTemp = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  if (request.image) {
    await Promise.all(request.image.map((value) => fs.promises.unlink(value)));
  }
};
