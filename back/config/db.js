import mongoose from "mongoose";


const connectDb = async()=>{

    try {
       await mongoose.connect(process.env.mongoUrl)
       console.log("DataBase Connected")
        
    } catch (error) {
        console.log(error)
    }

}

export default connectDb