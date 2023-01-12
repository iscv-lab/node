import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import * as fs from "fs";
import mongoose from "mongoose";
import morgan from "morgan";
import { AddressInfo } from "net";
//middleware
import bodyParser from "body-parser";
// import fs from "fs";

//socket.io

import { createServer } from "http";

import * as path from "path";
import * as util from "util";
import routers from "./routes/index";
import { ethers } from "ethers";
// import {
//   SpeedGooseDebuggerOperations,
//   applySpeedGooseCacheLayer,
// } from "speedgoose";

dotenv.config();

const logFile = fs.createWriteStream(path.join("./debug.log"), { flags: "a" });
const logStdout = process.stdout;

console.log = function (d) {
  logFile.write(
    `${new Date().toISOString()} ${util.format.apply(null, arguments)} \n`
  );
  new this.Console(logStdout).log(d);
};

console.error = (d) => {
  console.log(d);
};

const accessLogStream = fs.createWriteStream(path.join("access.log"), {
  flags: "a",
});
var app = express();

app.use(cors());

app.use(morgan("combined", { stream: accessLogStream }));
app.use(bodyParser.json()); //cho phep json
app.use(bodyParser.urlencoded({ extended: true })); //Cho phep form
app.set("view engine", "ejs");

mongoose.set("strictQuery", true);
mongoose.connect(process.env.APT_ENDPOINT_MONGODB, () => {
  console.log("connect to mongodb");
});
// applySpeedGooseCacheLayer(mongoose, {
//   redisUri: process.env.REDIS_URI,
//   defaultTtl: 18000,
//   debugConfig: {
//     enabled: true,
//     /** Optional: An array of mongoose models to debug, if not set then the debugger will log operations for all of the models */
//     debugModels: ["iscv"],
//     /** Optional: An array of operations to debug, if not set then the debugger will log all operations */
//     debugOperations: [
//       SpeedGooseDebuggerOperations.CACHE_QUERY,
//       SpeedGooseDebuggerOperations.CACHE_CLEAR,
//     ],
//   },
// });

//session
app.set("trust proxy", 1); // trust first proxy
// app.use(
//   session({
//     secret: config.get("secret_key"),
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   })
// );

//static folder
// app.use("/public", express.static("./public"));
app.set(
  "provider",
  new ethers.providers.WebSocketProvider("wss://ganache.ftisu.vn/")
);

app.use(routers);

export const server = createServer(app);

server.listen(process.env.PORT, () => {
  const { address, port } = server.address() as AddressInfo;
  console.log(`Example app listening at http://${address}:${port}`);
});
