import { countBooks } from "../services/countBooks";

export const countBooksController =async (req:any,res:any) =>{
try {
    const categorieId = parseInt(req.query.categorieId)
    const response = await countBooks(req.body,categorieId)

    return res.status(response.code).json({
        message:response.message,
        data:response.data
    })

} catch (error) {
    return res.status(500).json({ message: "internal server error" });
} 
}