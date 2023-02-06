import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import * as fs from "fs";
import bodyParser from "body-parser";
import morgan from "morgan";
import { AddressInfo } from "net";
import { ethers } from "ethers";
import { createServer } from "http";
import * as path from "path";
import * as util from "util";
import routers from "./routes/index";
import { createContext } from "~graphql/index";
import { mongoServer } from "./configs";
import { apolloServer } from "./graphql";

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
app.use("/public", express.static("./public"));

// ethers provider
const provider = new ethers.providers.WebSocketProvider(
  "wss://ganache.ftisu.vn/"
);
app.set("provider", provider);

// mongo
mongoServer();

app.use(routers);

export const server = createServer(app);
//  graphQL
const apollo = await apolloServer(server);
app.use(
  expressMiddleware(apollo, {
    context: () => {
      return createContext(provider);
    },
  })
);

server.listen({ port: process.env.PORT || 4000 }, () => {
  const { address, port } = server.address() as AddressInfo;
  console.log(`Example app listening at http://${address}:${port}`);
});
