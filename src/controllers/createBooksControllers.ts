import { createBooks } from "../services/createBooks"

export const createBooksController = async (req: any, res: any) => {
  try {
    const {name,description,totalPage,rate,author, categorieId}=req.body
    const categoryId = parseInt(req.params.categoryId)

    const response = await createBooks(req.body,categoryId)

    return res.status(response.code).json({
      message: response.message,
      data: response.data
    })
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur" })
  }
}