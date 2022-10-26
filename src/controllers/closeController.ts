import { Request, Response } from "express";

export function closeServer (req: Request, res: Response) {
    const message = "Servidor desligado, o serviço está indisponível!";
    res.status(200).send(message);
    process.exit(1);
}
