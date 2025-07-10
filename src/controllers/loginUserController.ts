import { LoginUser } from "../services/loginUser"

export const LoginUsersController= async (req : any , res:any)=>{
    const {name,lastname,email,password,roleId}=req.body
   try {
    const response= await LoginUser(req.body)
    return res.status(response.status).json({
        message :response.message,
        data:response.data
    })
   } catch (error) {
    return res.status(500).json({message:"internal server error"})
   }
}