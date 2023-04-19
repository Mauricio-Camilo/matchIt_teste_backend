import { Router } from "express";
import { getWhatsapp, postWhatsapp } from "../controllers/whatsappController.js";

const whatsappRouter = Router();

whatsappRouter.post("/whatsapp", postWhatsapp);
whatsappRouter.get("/whatsapp", getWhatsapp);

export default whatsappRouter;