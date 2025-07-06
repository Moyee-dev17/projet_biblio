import { rechercheBooks } from "../services/rechercheBooks"

export const rechercheBooksController = async (req: any, res: any) => {
  try {
    const author = req.query.author
    const name = req.query.name

    const response = await rechercheBooks(author, name)

    return res.status(response.code).json({
      message: response.message,
      data: response.data
    })
  } 
  catch (error) {
    return res.status(500).json({ message: "Erreur serveur" })
  }
}