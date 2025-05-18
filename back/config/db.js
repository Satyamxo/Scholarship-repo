import mongoose from "mongoose";


const connectDb = async()=>{

    try {
       await mongoose.connect(`mongodb+srv://guptas62434:vA900gYiT4PWQSYH@scholarshipdata.ifkze9b.mongodb.net/`,)
       console.log("DataBase Connected")
        
    } catch (error) {
        console.log(error)
    }

}

export default connectDb