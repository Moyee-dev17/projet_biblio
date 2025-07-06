import { db } from "../utils/db"

export const rechercheBooks = async (author: string, name: string) => {
  try {
  const books = await db.books.findMany({
    where: {
      author: author,
      name: {
        contains: name,
      }
    },
    include: {
      categories: true
    }
  })

  return {
    code: 200,
    message: "Recherche effectuée",
    data: books
  }
  } catch (error) {
    return {
            code : 500,
            message : "Internal serveur error"
        }
  }
  
}