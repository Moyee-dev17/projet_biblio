import { LoginUsersController } from "../controllers/loginUserController";
import { Router } from "express";

export const loginUserRoot = Router()
loginUserRoot.post('/login',LoginUsersController)