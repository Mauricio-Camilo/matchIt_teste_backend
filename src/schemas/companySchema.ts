import joi from 'joi';

const companySchema = joi.object({
  name: joi.string().required(),
  cnpj: joi.string().required(),
  address: joi.string().required(),
});

export default companySchema;