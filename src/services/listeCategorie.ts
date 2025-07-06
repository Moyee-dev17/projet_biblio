import { db } from "../utils/db";
export const listeCategorie=async () =>{
    try {
        const Cat=await db.categories.findMany()
        return{
            code:200,
            message:"voici la liste de toute les categories",
            data:Cat
        }
    } catch (error) {
         return {
            code : 500,
            message : "Internal serveur error"
        }
    }
}