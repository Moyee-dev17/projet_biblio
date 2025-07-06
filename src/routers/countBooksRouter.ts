import { Router } from "express";
import { countBooksController } from "../controllers/countBooksController";

export const countBooksRouter = Router()

countBooksRouter.get("/count" , countBooksController)
