import { verify } from "crypto";
import { db } from "../utils/db";
import { createCategorie } from "./createCategorie";

export const updateCategorie =async (body:any,id:number)=>{
    try {
        const Verify=await db.categories.findUnique({where:{id}})
        if(!verify){
            return{
                code:400,
                message:"la categorie n'existe pas"
            }
        }
        const UpdateCat= db.categories.update({
            where:{id},
            data:{
                name:body.name,
                description:body.description,
                type:body.type
            }
        })
        return{
            code:200,
            message:"categorie modifiée avec succes",
            data:UpdateCat
        }
    } catch (error) {
        return{
            code:500,
            message:"internal server error"
        }
    }
}