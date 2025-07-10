import { Router } from "express";
import { listeBooksController } from "../controllers/listeBooksController";
import { authMiddleware } from "../middlewares/authMiddleware";
export const listeBooksRouter = Router()


listeBooksRouter.get("/liste" , authMiddleware,listeBooksController)
