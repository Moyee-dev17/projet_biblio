import { Router } from "express";
import { updateCategorieController } from "../controllers/updateCategorieController";


export const updateCategorieRouter=Router()

updateCategorieRouter.put('/update/:id',updateCategorieController)