import { listeBooks } from "../services/listeBooks";
export const listeBooksController =async (req:any,res:any) =>{
    
    const categorieId=parseInt(req.query.categorieId)
    const response = await listeBooks(categorieId)
    return res.status(response.code).json({
        message:response.message,
        data:response.data
    })
}