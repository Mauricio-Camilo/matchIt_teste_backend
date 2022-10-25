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

async function deleteCompany(companyId : number) {

    await companiesService.checkCompanyId(companyId);

    await companiesRepository.deleteCompanyById(companyId);
}

async function checkCompanyId (companyId : number) {
    const checkCompanyId = await companiesRepository.checkCompanyById(companyId);
    if (!checkCompanyId) {
        throw { name: "notFound", message: "Company not found"}
    }
}

export const companiesService = {
    createCompany,
    listCompanies,
    checkCompanyId,
    deleteCompany
}