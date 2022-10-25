import { Router } from "express";
import companiesRouter from "./companiesRouter.js";

const router = Router();
router.use(companiesRouter);

export default router;