import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
const app = express()

dotenv.config(
    {
        path:'./.env'
    }
)

connectDB()
app.listen(process.env.PORT || 3000,()=>{
    console.log(`sever is listning on Port : ${process.env.PORT}`)
})
