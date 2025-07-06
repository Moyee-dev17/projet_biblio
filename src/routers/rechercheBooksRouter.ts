import { Router } from "express";
import { rechercheBooksController } from "../controllers/rechercheBooksController";

export const rechercheBooksRouter = Router()

rechercheBooksRouter.get("/search" , rechercheBooksController)
