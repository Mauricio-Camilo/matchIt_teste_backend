import prisma from "./../config/database.js";
import { CreateCompanyData } from "./../services/companiesService.js"

async function findCompanyCNPJ(cnpj : string) {
    return await prisma.company.findUnique({where: {cnpj}})
}

async function registerCompany(company : CreateCompanyData) {
    await prisma.company.create({data: company})
}

async function getAllCompanies(){
    return await prisma.company.findMany();
}

async function checkCompanyById(id : number) {
    return prisma.company.findUnique({where: {id}})
}

async function deleteCompanyById(id: number) {
    await prisma.company.delete({where: {id}})
}

async function updateCompanyById(company: CreateCompanyData, id: number) {
    await prisma.company.update({
        where: {id},
        data: {
            name: company.name,
            cnpj: company.cnpj,
            address: company.address
        }
    })
}

export const companiesRepository = {
    findCompanyCNPJ,
    registerCompany,
    getAllCompanies,
    checkCompanyById,
    deleteCompanyById,
    updateCompanyById
}