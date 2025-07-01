import { db } from "../utils/db"

export const createCategorie = async(body : any) => {
    try {
         const cat = await db.categories.create({
        data : {
            name : body.name,
            description : body.description,
            type : body.type
        }
    })
    return {
        code : 201,
        message : "Created",
        data : cat
    }
    } catch (error) {
        return {
            code : 500,
            message : "Internal server error"
        }
    }
}