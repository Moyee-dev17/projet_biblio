import { deleteCategorie } from "../services/deleteCategorie";

export const deleteCategorieController = async (req: any, res: any) => {
  try {
    const id = parseInt(req.params.id);
    const response = await deleteCategorie(id);

    return res.status(response.code).json({
      message: response.message,
      data: response.data,
    });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};
