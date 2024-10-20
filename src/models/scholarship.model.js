import mongoose, { Schema } from "mongoose"
const scholarshipSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   eligibilityCriteria: {
      type: [String], // Array of strings for various eligibility criteria
      required: true,
   },
   amount: {
      type: Number, // Monetary amount of the scholarship
      required: true,
   },
   deadline: {
      type: Date, // Deadline for applying
      required: true,
   },
   applicationLink: {
      type: String, // URL to the application page
      required: true,
   },
   imageUrl: {
      type: String,
      required: false,
   },
   createdAt: {
      type: Date,
      default: Date.now, // Automatically sets the date when a scholarship is created
   },
   updatedAt: {
      type: Date,
      default: Date.now,
   },
})

// Middleware to update the updatedAt field before saving
scholarshipSchema.pre("save", function (next) {
   this.updatedAt = Date.now()
   next()
})

export const Scholarship = mongoose.model("Scholarship", scholarshipSchema)
