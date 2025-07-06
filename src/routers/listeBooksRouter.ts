import { Router } from "express";
import { listeBooksController } from "../controllers/listeBooksController";
export const listeBooksRouter = Router()

listeBooksRouter.get("/liste" , listeBooksController)
