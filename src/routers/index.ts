import { Router } from "express";
import closeRouter from "./closeRouter.js";
import companiesRouter from "./companiesRouter.js";

const router = Router();
router.use(companiesRouter);
router.use(closeRouter);

export default router;