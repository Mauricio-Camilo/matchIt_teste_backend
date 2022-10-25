import { companiesRepository } from "../repositories/companiesRepository.js";
import { Company } from '@prisma/client';

export type CreateCompanyData = Omit <Company, "id">

async function createCompany(company : CreateCompanyData) {
    const checkCompanyCNPJ = await companiesRepository.findCompanyCNPJ(company.cnpj);
    if (checkCompanyCNPJ) {
        throw { name: "alreadyExists", message: "CNPJ already exists"}
    }
    await companiesRepository.registerCompany(company);
}

async function listCompanies() {
    const companies = await companiesRepository.getAllCompanies();
    return companies;
}

export const companiesService = {
    createCompany,
    listCompanies
}