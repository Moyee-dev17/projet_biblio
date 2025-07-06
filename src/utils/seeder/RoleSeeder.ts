import { Hash } from "node:crypto";
import { db } from "../db";
import bcrypt from "bcrypt"

enum role{
    User=1, 
    Admin=2,
    Root=3
}

export const seedRole=async()=>{

    let tabRole=["User","Admin","Root"]
    for(let i in tabRole){
        let RoleExist=await db.role.findFirst({where:{name:tabRole[i]}});
        if(RoleExist)continue;
        const createRole= await db.role.create({data:{name:tabRole[i]}})
        console.log("Role crée avex succes")
   }
} 

export const seedRoot=async()=>{
    
        let RootExist= await db.users.findUnique({where:{email:process.env.EMAIL as string}})
        
        if(RootExist){
          console.log("Root already exist")
          return false
        }
        const passwordHash=await bcrypt.hash(process.env.PASSWORD as string,10)
        const createRoot= await db.users.create(
        {data: {
        name:"root",
        lastname:"root",
        email: process.env.EMAIL as string,
        password: passwordHash,
        roleId:role.Root
    }})
    console.log("Root crée avec succes")
}

export const seedPwd=async()=>{
     const userExist=await db.users.findUnique({where:{email:process.env.EMAIL as string}})
     if(userExist){
        const isMatch= await bcrypt.compare(process.env.PASSWORD as string,userExist.password)
        if(isMatch){
            console.log("le mot de passe correspond")
        }
        else{
            console.log("le mot de passe ne correspond pas")
        }
     }
}





            
               
            
            
            
            