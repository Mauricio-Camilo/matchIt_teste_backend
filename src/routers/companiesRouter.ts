import { Router } from "express";
import { createCompany, listCompanies } from "../controllers/companiesController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import companySchema from "../schemas/companySchema.js";

const companiesRouter = Router();

companiesRouter.post("/companies", validateSchema(companySchema), createCompany);
companiesRouter.get("/companies", listCompanies);

export default companiesRouter;