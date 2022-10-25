import { companiesRepository } from "../repositories/companiesRepository.js";

async function createCompany() {
    console.log("service ativo");
    companiesRepository.createCompany();
}

export const companiesService = {
    createCompany
}