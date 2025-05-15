import express from 'express'
const userRouter = express.Router()

import { loginController, registerController} from '../controller/auth.js'


userRouter.post('/register' , registerController)

userRouter.post('/login' , loginController)




export default userRouter