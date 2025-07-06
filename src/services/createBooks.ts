import { db } from "../utils/db";
import { createCategorie } from "./createCategorie";


export const createBooks = async (body:any,categoryId:number) => {
  const categorie = await db.categories.findUnique({
    where: { id: categoryId }
  })

  if (!categorie) {
    return {
      code: 404,
      message: "Catégorie non trouvée",
      data: null
    }
  }

  const book = await db.books.create({
    data: {
    name:body.name ,
    description:body.description ,
    totalPage:body.totalPage,
    rate :body.rate,
    author:body.author, 
    categorieId:categoryId
    }
  })

  return {
    code: 201,
    message: `Livre créé dans la catégorie ID ${categoryId}`,
    data: {
      book,
      categoryId
    }
  }
}