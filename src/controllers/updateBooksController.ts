import { updateBooks } from "../services/updateBooks"
export const updateBooksController =async (req:any,res:any) =>{
    try {
        const categorieId = parseInt(req.query.categorieId)
        const bookId = parseInt(req.query.bookId)
    
        const response = await updateBooks(req.body,categorieId, bookId)
    return res.status(response.code).json({
        message:response.message,
        data:response.data
    })
    } catch (error) {
        return res.status(500).json({ message: "internal server error" });
    }
    
}