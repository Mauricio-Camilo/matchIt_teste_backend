import { Request, Response } from "express";
import { companiesService } from "../services/companiesService.js";

export async function createCompany (req: Request, res: Response) {
    companiesService.createCompany();
    res.send('Criação ativada');
}
