import { UserController } from "../controllers/RegistrerUsersController";
import { Router } from "express";

export const RegisterUserRoute=Router()

RegisterUserRoute.post('/register',UserController)