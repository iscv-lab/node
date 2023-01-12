import express from "express";
import {
  address,
  all,
  at,
  postAvatar,
} from "~controllers/employee/profile/index.js";
import uploadImageMiddleware from "~middlewares/image/uploadImageMiddleware.js";

const routers = express.Router();

routers.post("/avatar/:id", uploadImageMiddleware.single("image"), postAvatar);
routers.get("/all", all);
routers.get("/at/:id", at);
routers.get("/address/:address", address);

export default routers;
