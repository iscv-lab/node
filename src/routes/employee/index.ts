import express from "express";
import profile from "./profile/index.js";

const routers = express.Router();

routers.use("/profile", profile);

export default routers;
