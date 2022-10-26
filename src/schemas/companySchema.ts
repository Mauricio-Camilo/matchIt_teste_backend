import joi from 'joi'; 
import { CreateCompanyData } from "./../services/companiesService.js"

const companySchema = joi.object<CreateCompanyData>({
  name: joi.string().required(),
  cnpj: joi.string().required().pattern(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/0001-[0-9]{2}$/),
  address: joi.string().required(),
});

export default companySchema;