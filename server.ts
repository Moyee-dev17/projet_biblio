import express, { Application } from "express";
import { db } from "./src/utils/db";
import { createCategorieRouter } from "./src/routers/createCategorieRouter";
import { deleteCategorieRouter } from "./src/routers/deleteCategorieRouter";
import { listeCategorieRouter } from "./src/routers/listeCategorieRouter";
import { updateCategorieRouter } from "./src/routers/updateCategorieRouter";

import cors from "cors"




import { createBooksRouter } from "./src/routers/createBooksRouter";
import { countBooksRouter } from "./src/routers/countBooksRouter";
import { updateBooksRouter } from "./src/routers/updateBooksRouter";
import { deleteBooksRouter } from "./src/routers/deleteBooksRouter";
import { listeBooksRouter } from "./src/routers/listeBooksRouter";
import { rechercheBooksRouter } from "./src/routers/rechercheBooksRouter";

import dotenv from "dotenv"

dotenv.config({
    path:'.env'
})

const app:Application =express()

app.use(
    cors({
    origin:"*",
    methods:['GET']
}))

app.use(express.json())



//Route API
app.use("/categorie" , createCategorieRouter);
app.use("/categorie",deleteCategorieRouter);
app.use("/categorie",listeCategorieRouter)
app.use("/categorie",updateCategorieRouter)


app.use('/books',createBooksRouter)
app.use('/books',countBooksRouter)
app.use('/books',updateBooksRouter)
app.use('/books',deleteBooksRouter)
app.use('/books',listeBooksRouter)
app.use('/books',rechercheBooksRouter)




const port=3000
console.log(process.env.PORT)
import { seedRole } from "./src/utils/seeder/RoleSeeder";
import { seedRoot } from "./src/utils/seeder/RoleSeeder";
import { seedPwd } from "./src/utils/seeder/RoleSeeder";
app.listen(port , async() => {
    try {
        db.$connect().then(()=>{
            console.log("Database is connected")
        })
        console.log("Application is running on port :" , port)
        await seedRole()
        await seedRoot();
        await seedPwd();
    } catch (e) {
        db.$disconnect();
        console.log("Db is down")
    }
    
})


