import moongoose, { Schema } from "mongoose"

const userSchema = new Schema(
   {
      fullName: {
         type: String,
         required: true,
         lowercase: true,
         minLegth: 2,
         trim: true,
      },
      email: {
         type: String,
         unique: true,
         lowercase: true,
         trim: true,
         required: true,
         index: true,
      },
      password: {
         type: String,
         required: [true, 'Password is required'],
         minLegth: 8,

      },
      gender: {
         //enum
         type: String,
         enum:["Male","Female","Other"],
         required: true,
      },
      avatar: {
            type: String,
            
      },
      caste: {
         //enum
         type: String,
         enum:["General","OBC","SC","ST"],
      },
      religion: {
         //enum
            type: String,
            enum:["Jain","Hindu","Muslim","Sikh","Christian","Buddhist","Other"],
      },
      phoneNumber: {
            type: Number,
            // required: true,
            minLegth: 10,
            maxLegth: 10,
      },
      address: {
            type: String,
            // required: true,
      },
      city: {
            type: String,
            
      },
      state: {  
            type: String,
      },
      country: {
            type: String,
      },
      qualification: {

      },
      dob: {
            type: Date,
            // required: true,
      },
      tenthPercentage: {    
        type: Number,
      },
      twelthPercentage: {
        type: Number,
      },
      jeemainRank: {
        type: Number,
      },
      jeemainPercentile: {
        type: Number,
      },
      schoolName: {
        type: String,
      },
      stream: {
        type: String,
      },
      collegeName: {
        type: String,
      },
      branch: {
        type: String,
      },
      disablity: {
        type: Boolean,
      },
      disablityType: {
        type: String,
      },
      disablityPercentage: {
        type: Number,
      },
      disablityCertificate: {
        type: String,
      },
      incomeRange: {
        type: String,
      },
      incomeCertificate: {
        type: String,
      },
      graduationYear: {
        type: Number,
      },
      currentCGPA: {    
        type: Number,
      },
      scholarShipAppiledFor: {

      },
      scholarShipStatus: {
        type: String,
      },
      howDidYouKnowAboutUs: {
        type: String,
      },
      subscribeUsForUpdates: {
        type: Boolean,
      },
      refreshToken: {
            type: String,
      },
   },
   {
      timestamps: true,
   }
)

export const User = moongoose.model("User", userSchema)
