import express from "express";
import { getAvatar, postAvatar } from "~controllers/employee/profile/index";
import uploadImageMiddleware from "~middlewares/image/uploadImageMiddleware";

const routers = express.Router();

routers.post("/avatar/:id", uploadImageMiddleware.single("image"), postAvatar);
routers.get("/avatar/:cid", getAvatar);

export default routers;
