import { Router } from "express";
import closeRouter from "./closeRouter.js";
import companiesRouter from "./companiesRouter.js";
import whatsappRouter from "./whatsappRouter.js";

const router = Router();
router.use(companiesRouter);
router.use(closeRouter);
router.use(whatsappRouter);

export default router;


