import { createCategorie } from "../services/createCategorie"

export const createCategorieController = async (req :any , res : any)  => {
    try {
        const {name , description , type} = req.body;
        const response = await createCategorie(req.body)
        return res.status(response.code).json({
            message : response.message,
            data : response.data
        })
    } catch (error) {
        return res.status(500).json({message : "Internal serveur error"})
    }
}