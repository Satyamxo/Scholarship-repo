import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import bcrypt from "bcryptjs"






const registerController = async (req, res) => {

    try {

        const { name, phone, email, password } = req.body

        const isEmail = await userModel.findOne({ email })
        if (isEmail) {
            return res.status(400).json({ success: false, message: "Already Registerd Please Login" })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(password, salt)

        const userData = new userModel({
            name,
            email,
            phone,
            password: hashedPass
        })

        await userData.save()

        return res.status(201).json({ success: true, message: "Registration Suiccessfully" })


    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }





}


const loginController = async (req, res) => {


    try {



        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {

            return res.status(400).json({ success: false, message: "User not Registerd" })

        }


        const isMatch = await bcrypt.compare(password, user.password)

  

        if (!isMatch) {

            return res.status(400).json({ success: false, message: "Email or Password is wrong" })
        }

        const token = jwt.sign({ userId: user._id, email: user.email , phone: user.phone , name: user.name }, process.env.JWT_SECRET, { expiresIn: "7d" })

        return res.status(200).json({ success: true, message: "Login Succesfuuly", token })


    } catch (error) {

        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }


}








const adminController = async (req, res) => {

    try {
        const {email , password} = req.body

        if(email === process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD){
           const token = jwt.sign({adminEmail: email} , process.env.JWT_SECRET ,{expiresIn: "7d"})
            return res.status(200).json({ success: true, message: "Login Succesfuuly", token })
        }
        else{
            return res.status(400).json({ success: false, message: "Something is Wrong" })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: error.message })
    }

}





















export { registerController, adminController, loginController }