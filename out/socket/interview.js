import fs from 'fs';
import { createAdapter } from '@socket.io/redis-adapter';

const interview = (app, pubClient, subClient) => {
    app.ready().then(() => {
        app.io.adapter(createAdapter(pubClient, subClient));
        app.io.on("connection", (socket) => {
            console.log(`Client ${socket.id} connected.`);
            const tmpFilePath = "./uploads/interview/tempfile.webm";
            let destStream = undefined;
            socket.on("start-interview", () => {
                destStream = fs.createWriteStream(tmpFilePath);
            });
            socket.on("chunk-interview", (chunk) => {
                destStream.write(chunk);
            });
            socket.on("stop-interview", () => {
                destStream.end(() => {
                    console.log("Data has been written to the file.");
                });
            });
            socket.on("disconnect", async () => {
                console.log(`Client ${socket.id} disconnected.`);
            });
        });
    });
};

export { interview };
