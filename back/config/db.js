import mongoose from "mongoose";


const connectDb = async()=>{

    try {
       await mongoose.connect(mongoUrl)
       console.log("DataBase Connected")
        
    } catch (error) {
        console.log(error)
    }

}

export default connectDb