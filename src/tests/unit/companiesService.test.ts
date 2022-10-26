import { jest } from "@jest/globals";
import { companiesService } from "../../services/companiesService.js";
import { companiesRepository } from "../../repositories/companiesRepository.js";

import { CreateCompanyData } from "./../../services/companiesService.js"
import prisma from "./../../config/database.js";

describe("companies Services createCompany function tests suite", () => {

    it("should create a company", async () => {

        await prisma.$executeRaw`TRUNCATE TABLE companies RESTART IDENTITY`

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

describe("companies Services listCompanies function tests suite", () => {

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

describe("companies Services deleteCompany function tests suite", () => {

    it("Should delete a company", async () => {

        const companyId = 1;

        jest.spyOn(companiesRepository, "checkCompanyById").mockImplementationOnce(() : any => {
            return companyId;
        });
   
        jest.spyOn(companiesRepository, "deleteCompanyById").mockImplementationOnce(() : any => {});

        await companiesService.deleteCompany(companyId);

        expect(companiesRepository.checkCompanyById).toBeCalled();
        expect(companiesRepository.deleteCompanyById).toBeCalled();
    });

    it("should fail to delete a company", async () => {

        const companyId = 10

        jest.spyOn(companiesRepository, "checkCompanyById").mockImplementationOnce(() : any => {});

        const promise = companiesService.deleteCompany(companyId)

        expect(promise).rejects.toEqual({
            message: "Company not found",
            name: "notFound"
        })
    });
})

describe("companies Services updateCompany function tests suite", () => {

    it("Should update a company", async () => {
        const company : CreateCompanyData = {
            name: "",
            cnpj: "",
            address: ""
        }

        const companyId = 1;

        jest.spyOn(companiesRepository, "checkCompanyById").mockImplementationOnce(() : any => {
            return companyId;
        });

        jest.spyOn(companiesRepository, "updateCompanyById").mockImplementationOnce(() : any => {});
    
        await companiesService.updateCompany(company, companyId);

        expect(companiesRepository.checkCompanyById).toBeCalled();
        expect(companiesRepository.updateCompanyById).toBeCalled();
    })
})