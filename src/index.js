import express from "express"
import dotenv from "dotenv"
const app = express()

dotenv.config(
    {
        path:'./.env'
    }
)


app.listen(process.env.PORT || 3000,()=>{
    console.log(`sever is listning on Port : ${process.env.PORT}`)
})
