import sharp from 'sharp';
import fs from 'fs';
import pump from 'pump';
import { v4 } from 'uuid';

const imageMiddleware = async (request, reply, done) => {
    const pm = new Promise((resolve, reject) => {
        const image = [];
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
        function handler(field, file, filename, encoding, mimetype) {
            const chunks = [];
            file.on("data", (chunk) => {
                chunks.push(chunk);
            });
            file.on("end", async () => {
                const buffer = Buffer.concat(chunks);
                await sharp(buffer)
                    .resize({ height: 1000, width: 1000, fit: "contain" })
                    .jpeg({ quality: 80 })
                    .rotate()
                    .toBuffer();
            });
            const imageName = `./uploads/${v4()}.jpeg`;
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
const removeTemp = async (request, reply) => {
    if (request.image) {
        await Promise.all(request.image.map((value) => fs.promises.unlink(value)));
    }
};

export { imageMiddleware, removeTemp };
