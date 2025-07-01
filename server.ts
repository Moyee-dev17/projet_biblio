const express=require('express')
import { PrismaClient } from "@prisma/client/extension";
const app=express()
const port=3000
app.listen(`vous etes connectés sur le port ${port}`)
