import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
const app = express()
app.use(express.json())
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

app.post("/addscholarship", async (req, res) => {
   try {
      const {
         title,
         description,
         eligibilityCriteria,
         amount,
         deadline,
         applicationLink,
         imageUrl,
      } = req.body

      // Check if all required fields are provided
      if (
         !title ||
         !description ||
         !eligibilityCriteria ||
         !amount ||
         !deadline ||
         !applicationLink
      ) {
         return res
            .status(400)
            .json({ message: "All required fields must be provided" })
      }

      // Create a new scholarship entry
      const newScholarship = await Scholarship.create({
         title,
         description,
         eligibilityCriteria,
         amount,
         deadline,
         applicationLink,
         imageUrl, // optional
      })

      res.status(201).json(newScholarship)
   } catch (error) {
      res.status(500).json({
         message: "Error adding scholarship data",
         error: error.message,
      })
   }
})
