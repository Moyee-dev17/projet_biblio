import { Router } from "express";
import { updateBooksController } from "../controllers/updateBooksController";
export const updateBooksRouter = Router()
updateBooksRouter.put("/update" , updateBooksController)
