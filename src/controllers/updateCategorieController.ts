import { db } from "../utils/db";
import { updateCategorie } from "../services/updateCategorie";


export const updateCategorieController = async(req:any , res:any) =>{
    try {
    const {name,description,type}=req.body
    const id=Number(req.params.id)
    
    const response= await updateCategorie(req.body , id)
    return res.status(response.code).json({
        message:response.message,
        data:response.data
    })
    } catch (error) {
         return res.status(500).json({ message: "internal server error" });
    }
    
}
