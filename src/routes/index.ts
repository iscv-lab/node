import express from "express";
import employee from "./employee/index.js";

const routers = express.Router();

routers.use("/employee", employee);

export default routers;
