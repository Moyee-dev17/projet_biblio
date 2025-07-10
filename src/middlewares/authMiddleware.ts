import { NextFunction } from "express";
import { db } from "../utils/db";
import  jwt, { JwtPayload } from "jsonwebtoken";

import { verify } from "jsonwebtoken";

// interface de typage
interface dataToken extends JwtPayload{
    id: number,
    name:string,
    lastname:string,
    email:string,
    roleId:number
}

// fonction d'authentification
 export const authMiddleware=async (req:any,res:any,next:any)=>{

    try {
        // separer le token du bearer
        const token=req.headers.authorization.split(" ")[1]

        // decoder le token pour voir les informations qui y sont inscrit
        const decodeToken = jwt.verify(token,process.env.SECRET_KEY as string)as dataToken

        // recuperer l'id de l'utilisateur renvoyé par le token
        const userId = decodeToken.id

        // trouver l'utilisateur connecté avec toute ses informations
        const userConnected= await db.users.findUnique({where:{id:userId}})
        
        // le req.user contient les infos du user
        req.user=userConnected

        next()
    }

     catch (error) {
    console.log(error)
    }
 }