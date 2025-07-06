import { db } from "../utils/db";
import { createBooks } from "./createBooks";
import { createCategorie } from "./createCategorie";

export const deleteBooks = async( id:number)=>{
    try {
        const catVerify=await db.categories.findUnique({where:{id}})
        if(!catVerify){
            return{
                code:400,
                message:"categorie inexistente"
            }
        }
        const BookVerif= await db.books.findUnique({where:{id}})
        if(!BookVerif){
            return{
                code:400,
                message:"livre introuvable"
            }
        }
        const BookDelete= await db.books.delete({where:{id}})
        return{
            code:200,
            message:"Livre supprimé avec success",
            data:BookDelete
        }
    } catch (error) {
        return{code:500,
            message:"internal server error"
        }
    }
}