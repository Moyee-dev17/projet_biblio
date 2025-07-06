import { db } from "../utils/db";
import { createCategorie } from "./createCategorie";
import { listeBooks } from "./listeBooks";

export const countBooks = async(body:any,categorieId:number) =>{
try {
    const vrCat = await db.categories.findUnique({ where: { id: categorieId } });
    if (!vrCat) {
      return {
        code: 400,
        message: "Catégorie introuvable",
      };
    }
    const books = await db.books.findMany({
      where: {
        categorieId:categorieId
      }, 
      include:{
        categories:true
      }
    });
    if(!books){
        return{
            code:400,
            message:"aucun livre enregistrer dans cette categorie"
        }
    }
    const compt= await db.books.groupBy({
        by:['categorieId'],
        _count:{
            id:true
        }
    })
    return{
        code:200,
        message:"Nombre des livres:",
        data:compt
    }
} catch (error) {
    return{code:500,
            message:"internal server error"
        }
}
}