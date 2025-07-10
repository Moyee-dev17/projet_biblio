import { error } from "console";
import { IsRoot } from "../services/RoleManager";
import { listeBooks } from "../services/listeBooks";
export const listeBooksController =async (req:any,res:any) =>{
    console.log("user connecté :",req.user)
    const isRoot= await IsRoot(req.user.roleId)
    if(!isRoot){return res.status(403).json({message:"Acces refusé"})}
    const categorieId=parseInt(req.query.categorieId)
    const response = await listeBooks(categorieId)
    res.send("Salut")
    return res.status(response.code).json({
        message:response.message,
        err:response.error,
        data:response.data,
    })
}