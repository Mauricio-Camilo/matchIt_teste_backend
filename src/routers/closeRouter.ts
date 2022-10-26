import { Router } from "express";
import { closeServer } from "../controllers/closeController.js";

const closeRouter = Router();

closeRouter.post("/close", closeServer);

export default closeRouter;