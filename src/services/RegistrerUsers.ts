import { db } from "../utils/db";
import bcrypt from "bcrypt";

export enum Role {
  User = 1,
  Admin = 2,
  Root = 3
}

export const RegisterUser = async (body: any) => {
  try {
    if (!body.name || !body.lastname || !body.email || !body.password) {
  return {
    status: 400,
    message: "Champs manquants",
  };
}
   // Vérifie si l'utilisateur existe déjà
const existingUser = await db.users.findUnique({
    where: { email: body.email },
    });

    if (existingUser) {
      return {
        status: 400,
        message: "Utilisateur déjà existant",
      };
    }
    const PasswordHashed = await bcrypt.hash(body.password, 10);

    // Création de l'utilisateur
    const createdUser = await db.users.create({
      data: {
        lastname: body.lastname,
        email: body.email,
        password: PasswordHashed,
        roleId: Role.User, 
            name: body.name,
      },
    });

    return {
      status: 201,
      message: "Utilisateur créé avec succès",
      data: createdUser,
    };
  } catch (error: any) {
    console.error("Erreur lors de l'enregistrement :", error);
    return {
      status: 500,
      message: "Erreur interne du serveur",
      error:  error,
    };
  }
};
