import { db } from "../utils/db";
import bcrypt from "bcrypt";
import { role } from "../utils/seeder/RoleSeeder";
import { tokenGenerate } from "../utils/token";
export const LoginUser = async (body: any) => {
  try {
    const user = await db.users.findUnique({ where: { email:body.email } });
    if (!user) {
      return { status: 404, message: "Utilisateur non trouvé" };
    }

    const passwordMatch = await bcrypt.compare(body.password, user.password);
    if (!passwordMatch) {
      return { status: 400, message: "Mot de passe incorrect" };
    }
    const dataUser = {
        id:user.id,
        name:user.name,
        lastname:user.lastname,
        email:user.email,
        roleId:user.roleId
    }
     const token = await tokenGenerate(dataUser)
     console.log(token)
    return {
      status: 200,
      message: "Connexion réussie",
      data: {
        user: {
          id: user.id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          roleId:role.User ,
        },
      },
    };

  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    return {
      status: 500,
      message: "Erreur interne du serveur",
      error:  error,
    };
  }
};
