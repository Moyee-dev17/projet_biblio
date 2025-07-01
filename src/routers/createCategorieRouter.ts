import { Router } from "express";
import { createCategorieController } from "../controllers/createCategorie";

export const createCategorieRouter = Router()

createCategorieRouter.post("/create" , createCategorieController)