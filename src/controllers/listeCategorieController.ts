import { listeCategorie } from "../services/listeCategorie";

export const listeCategorieController= async(req: any ,res:any)=>{
try {
    const response= await listeCategorie()
    return res.status(response.code).json({
        message:response.message,
        data:response.data
    })
} catch (error) {
    return res.status(500).json({ message: "internal server error" });
}
}