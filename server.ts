import express, { Application } from "express";
import { PrismaClient } from "@prisma/client/extension";
import { db } from "./src/utils/db";
import { createCategorieRouter } from "./src/routers/createCategorieRouter";



const app:Application =express()

app.use(express.json())


app.use("/categorie" , createCategorieRouter);

const port=3000
app.listen(port , () => {
    try {
        db.$connect().then(()=>{
            console.log("Database is connected")
        })
        console.log("Application is running on port :" , port)
    } catch (e) {
        db.$disconnect();
        console.log("Db is down")
    }
    
})

app.post("/" , async(req:any , res:any)=>{
   
})

app.get("/" , async(req:any , res:any)=>{
    const cat = await db.categories.findMany()
    return res.send(cat)
})
