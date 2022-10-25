import { Router } from "express";
import { createCompany } from "../controllers/companiesController.js";

const companiesRouter = Router();

companiesRouter.post("/companies", createCompany);

export default companiesRouter;