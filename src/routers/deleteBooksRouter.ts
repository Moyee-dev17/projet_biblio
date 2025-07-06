import { Router } from "express";
import { deleteBooksController } from "../controllers/deleteBooksRouter";

export const deleteBooksRouter = Router()

deleteBooksRouter.delete("/delete/:id" , deleteBooksController)
