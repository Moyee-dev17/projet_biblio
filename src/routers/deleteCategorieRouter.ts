import { Router } from "express";
import { deleteCategorieController } from "../controllers/deleteCategorieController";

export const deleteCategorieRouter = Router();

deleteCategorieRouter.delete("/delete/:id", deleteCategorieController);
