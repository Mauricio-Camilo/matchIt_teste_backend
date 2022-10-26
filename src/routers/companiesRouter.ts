import { Router } from "express";
import { createCompany, deleteCompany, listCompanies, updateCompany } from "../controllers/companiesController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import companySchema from "../schemas/companySchema.js";
import updateSchema from "../schemas/updateSchema.js";

const companiesRouter = Router();

companiesRouter.post("/companies", validateSchema(companySchema), createCompany);
companiesRouter.get("/companies", listCompanies);
companiesRouter.delete("/companies/:id", deleteCompany);
companiesRouter.put("/companies/:id", validateSchema(updateSchema), updateCompany);

export default companiesRouter;