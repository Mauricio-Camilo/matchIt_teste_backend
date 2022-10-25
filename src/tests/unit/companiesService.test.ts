import { jest } from "@jest/globals";
import { companiesService } from "../../services/companiesService.js";
import { companiesRepository} from "../../repositories/companiesRepository.js";

import { CreateCompanyData } from "./../../services/companiesService.js"

describe("companies Repositorycreate function tests suite", () => {

    it("should create a company", async () => {

        const company : CreateCompanyData = {
            name: "Empresa X",
            cnpj: "00.000.000/0001-00",
            address: "Avenida Y"
        }

        jest.spyOn(companiesRepository, 'findCompanyCNPJ').mockImplementationOnce(() : any => {});

        jest.spyOn(companiesRepository, 'registerCompany').mockImplementationOnce(() : any => {});

        await companiesService.createCompany(company);

        expect(companiesRepository.findCompanyCNPJ).toBeCalled();
        expect(companiesRepository.registerCompany).toBeCalled();
    })
})