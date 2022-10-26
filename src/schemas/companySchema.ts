import joi from 'joi'; 
import { CreateCompanyData } from "./../services/companiesService.js"

const companySchema = joi.object<CreateCompanyData>({
  name: joi.string().required(),
  cnpj: joi.string().required(),
  address: joi.string().required(),
});

export default companySchema;