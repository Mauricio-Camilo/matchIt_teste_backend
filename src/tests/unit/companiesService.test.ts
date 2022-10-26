import { jest } from "@jest/globals";
import { companiesService } from "../../services/companiesService.js";
import { companiesRepository } from "../../repositories/companiesRepository.js";

import { CreateCompanyData } from "./../../services/companiesService.js"
import prisma from "./../../config/database.js";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE companies RESTART IDENTITY`
})

describe("companies Repository createCompany function tests suite", () => {

    it("should create a company", async () => {

        const company: CreateCompanyData = {
            name: "Empresa X",
            cnpj: "00.000.000/0001-10",
            address: "Avenida Y"
        }

        jest.spyOn(companiesRepository, 'findCompanyCNPJ').mockImplementationOnce((): any => { });

        jest.spyOn(companiesRepository, 'registerCompany').mockImplementationOnce((): any => { });

        await companiesService.createCompany(company);

        expect(companiesRepository.findCompanyCNPJ).toBeCalled();
        expect(companiesRepository.registerCompany).toBeCalled();
    });

    it("should fail to create a company", async () => {
        const company: CreateCompanyData = {
            name: "Empresa X",
            cnpj: "00.000.000/0001-10",
            address: "Avenida Y"
        }

        jest.spyOn(companiesRepository, 'findCompanyCNPJ').mockImplementationOnce((): any => {
            return company.name;
        });

        const promise = companiesService.createCompany(company)

        expect(promise).rejects.toEqual({
            message: "CNPJ already exists",
            name: "alreadyExists"
        })

        await companiesService.createCompany(company);

    });

})

describe("companies Repository listCompanies function tests suite", () => {

    it("Should list all companies", async () => {
        const companies: any = [{
            name: "Empresa X",
            cnpj: "00.000.000/0001-01",
            address: "Avenida Y"
        },
        {
            name: "Empresa Y",
            cnpj: "00.000.000/0001-02",
            address: "Avenida Z"
        }]

        jest.spyOn(companiesRepository, "getAllCompanies").mockImplementationOnce(() : any => {
            return companies
        });

        await companiesService.listCompanies();

        expect(companiesRepository.getAllCompanies).toBeCalledTimes(1);
    })
})