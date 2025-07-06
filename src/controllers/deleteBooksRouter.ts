
import { deleteBooks } from "../services/deleteBooks";

export const deleteBooksController =async (req:any,res:any) =>{
    const id= parseInt(req.params.id)
    const response = await deleteBooks(id)
    return res.status(response.code).json({
        message:response.message,
        data:response.data
    })
}