import { Router } from "express";
import { listeCategorieController } from "../controllers/listeCategorieController";

export const listeCategorieRouter=Router()

listeCategorieRouter.get('/liste',listeCategorieController)