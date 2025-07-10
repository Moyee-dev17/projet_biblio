import { RegisterUser } from "../services/RegistrerUsers";

const path = require('path');

export const UserController = async (req: any, res: any) => {
  try {
    const { name, lastname, email, password } = req.body;
    const response = await RegisterUser(req.body);
    res.sendFile(path.join(__dirname + "/login.html"))
    return res.status(response.status).json({
      data: response.data ,
      message: response.message,
    });
    res.send("donnée reçu")
  } catch (error) {
    console.error("Erreur serveur :", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};





