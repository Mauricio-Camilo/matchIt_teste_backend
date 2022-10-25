import { Request, Response } from "express";
import { companiesService } from "../services/companiesService.js";

export async function createCompany (req: Request, res: Response) {
    await companiesService.createCompany(req.body);
    res.status(201).send('Company created');
}
