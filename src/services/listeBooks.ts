import { db } from "../utils/db";
import { createCategorie } from "./createCategorie";
export const listeBooks = async (categorieId: number) => {
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

    return {
      code: 200,
      message: `Livres de la catégorie "${vrCat.name}"`,
      data: books,
    };
  } catch (error:any) {
    console.log(error.message)
    return {
      code: 500,
      message: "Erreur serveur",
      error : error.message
    };
  }
};
