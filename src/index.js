import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
const app = express()
import { Scholarship } from "./models/scholarship.model.js"
dotenv.config({
   path: "./.env",
})

connectDB()
app.listen(process.env.PORT || 3000, () => {
   console.log(`sever is listning on Port : ${process.env.PORT}`)
})
app.get("/", (req, res) => {
   res.send("hello world")
})
app.get("/all-scholarship", async (req, res) => {
   try {
      const scholarships = await Scholarship.find({})
      res.status(200).json(scholarships)
   } catch (error) {
      res.status(500).json({ message: "Error Fetching data", error })
   }
})
