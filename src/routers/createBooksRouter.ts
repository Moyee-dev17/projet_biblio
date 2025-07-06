// routes/createBooksRouter.ts
import { Router } from "express";
import { createBooksController } from "../controllers/createBooksControllers";

export const createBooksRouter = Router();
createBooksRouter.post("/create/:categoryId", createBooksController);
