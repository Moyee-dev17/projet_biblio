import jwt  from "jsonwebtoken";
import { db } from "./db";


export const tokenGenerate =async(dataUser:{id:number, name:string,lastname:string,email:string, roleId:number})=>{
const secretkey=process.env.SECRET_KEY as string
    return await jwt.sign(dataUser,secretkey,{
        expiresIn:'1h'
    })    
}
