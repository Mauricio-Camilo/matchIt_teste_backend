import { Router } from "express";
import { createCompany, deleteCompany, listCompanies, updateCompany } from "../controllers/companiesController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import companySchema from "../schemas/companySchema.js";

const companiesRouter = Router();

companiesRouter.post("/companies", validateSchema(companySchema), createCompany);
companiesRouter.get("/companies", listCompanies);
companiesRouter.delete("/companies/:id", deleteCompany);
companiesRouter.put("/companies/:id", updateCompany);

export default companiesRouter;