import { db } from "../utils/db";
import { createCategorie } from "./createCategorie";

export const updateBooks = async (body:any,categorieId: number, bookId: number) => {
  try {
    // Vérifie d'abord si la catégorie existe
    const vrCat = await db.categories.findUnique({ where: { id: categorieId } })
    if (!vrCat) {
      return {
        code: 400,
        message: "Catégorie introuvable",
      }
    }

    // Vérifie que le livre existe
    const vrBk = await db.books.findUnique({ where: { id:bookId } });
    if (!vrBk) {
      return {
        code: 404,
        message: "Livre introuvable",
      };
    }

    // Met à jour le livre
    const updatedBook = await db.books.update({
      where: { id:bookId },
      data: {
        name: body.name,
        description: body.description,
        totalPage: body.totalPage,
        rate: body.rate,
        author: body.author,
        categorieId: vrCat.id, 
      },
    });

    return {
      code: 200,
      message: "Livre modifié avec succès",
      data: updatedBook,
    };
  } catch (error) {
    console.error(error);
    return {
      code: 500,
      message: "Erreur interne du serveur",
    };
  }
};
