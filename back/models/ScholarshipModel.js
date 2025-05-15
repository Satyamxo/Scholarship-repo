import mongoose from "mongoose"

const scholarshipSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    eligibility:{
        type: String,
        required: true
    },
    criteria:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    dateFrom: {
        type: Date,
        required: true
      },
      dateTo: {
        type: Date,
        required: true, 
      }
    }, 
    {
      timestamps: true 
    
    
})

const scholarship = mongoose.model("Scholarships" , scholarshipSchema)

export default scholarship