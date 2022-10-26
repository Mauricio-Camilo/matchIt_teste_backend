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

async function updateCompany(company : CreateCompanyData, companyId : number) {

    const previousCompanyData = await companiesService.checkCompanyId(companyId);

    const updatedCompanyData = companiesService.updatedCompanyData(company, previousCompanyData);

    await companiesRepository.updateCompanyById(updatedCompanyData, companyId);
}

async function checkCompanyId (companyId : number) {
    const response = await companiesRepository.checkCompanyById(companyId);
    if (!response) {
        throw { name: "notFound", message: "Company not found"}
    }
    else return response;
}

function updatedCompanyData(updatedCompanyData : CreateCompanyData, previousCompanyData : CreateCompanyData) {
    if (updatedCompanyData.name === "") updatedCompanyData.name = previousCompanyData.name;
    if (updatedCompanyData.cnpj === "") updatedCompanyData.cnpj = previousCompanyData.cnpj;
    if (updatedCompanyData.address === "") updatedCompanyData.address = previousCompanyData.address;

    return updatedCompanyData;
}

export const companiesService = {
    createCompany,
    listCompanies,
    checkCompanyId,
    deleteCompany,
    updateCompany,
    updatedCompanyData
}