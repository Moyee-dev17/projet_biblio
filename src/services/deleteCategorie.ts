import { db } from "../utils/db";

import { createCategorie } from "./createCategorie";
export const deleteCategorie= async (id:number) => {
    try {
        const verifcat = await db.categories.findUnique({where:{id:id}})
        console.log(verifcat)
        if(!verifcat){
            return{
                code:404,
                message:"categorie introuvable"
            }
        }
        const suppr= await db.categories.delete({where:{id}})
        return {
            code:200,
            message:"categorie supprimée avec succes",
            data:suppr
        }
    } catch (error) {
        return{code:500,
            message:"internal server error"
        }
    }
}