import prisma from "./../config/database.js";
import { CreateCompanyData } from "./../services/companiesService.js"


async function findCompanyCNPJ(cnpj : string) {
    return await prisma.company.findUnique({where : {cnpj}})
}

async function registerCompany(company : CreateCompanyData) {
    await prisma.company.create({data: company})
}

async function getAllCompanies(){
    return await prisma.company.findMany();
}

export const companiesRepository = {
    findCompanyCNPJ,
    registerCompany,
    getAllCompanies
}