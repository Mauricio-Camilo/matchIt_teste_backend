import joi from 'joi'; 
import { CreateCompanyData } from "./../services/companiesService.js"

const updateSchema = joi.object<CreateCompanyData>({
  name: joi.string().allow(null,''),
  cnpj: joi.string().pattern(/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/0001-[0-9]{2}$/).allow(null,''),
  address: joi.string().allow(null,''),
});

export default updateSchema;