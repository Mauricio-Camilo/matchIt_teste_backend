import { Request, Response } from "express";
import { companiesService } from "../services/companiesService.js";

export async function createCompany (req: Request, res: Response) {
    await companiesService.createCompany(req.body);
    res.status(201).send('Company created');
}

export async function listCompanies (req: Request, res: Response) {
    const companies = await companiesService.listCompanies();
    res.status(200).send(companies);
}

export async function deleteCompany (req: Request, res: Response) {
    const {id} = req.params;
    await companiesService.deleteCompany(parseInt(id));
    res.status(200).send("Company deleted");
}

export async function updateCompany (req: Request, res: Response) {
    const {id} = req.params;
    await companiesService.updateCompany(req.body, parseInt(id));
    res.status(200).send("Company updated")

}