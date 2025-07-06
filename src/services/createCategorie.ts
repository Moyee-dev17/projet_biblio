import { db } from "../utils/db";

export const createCategorie = async (body: any) => {
  try {
    const verif = await db.categories.findFirst({
      where: { name: body.name },
    });
    if(body.name==""||body.description==""||body.type==""){
      return{
        code:400,
        message:"veuillez remplir tout les champs"
      };
    }
    if(body.name!="string"||body.description!="string"||body.type!="string"){
      return{
        code:400,
        message:"les types ne correspondent pas!"
      }
    }
    if (verif) {
      // Retourne un code de succès avec la catégorie existante
      return {
        code: 200,
        message: "Catégorie déjà existante",
        data: verif,
      };
    }

    const cat = await db.categories.create({
      data: {
        name: body.name,
        description: body.description,
        type: body.type,
      },
    });

    return {
      code: 201,
      message: "Catégorie créée avec succès",
      data: cat,
    };
  } catch (error) {
    console.error("Erreur createCategorie:", error);
    return {
      code: 500,
      message: "Erreur serveur lors de la création de la catégorie",
    };
  }
};
