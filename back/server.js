import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js';
import connectDb from './config/db.js';
import documentRoutes from "./routes/documentRoute.js"
import adminRouter from './routes/adminRoute.js';


import cors from 'cors'
import applyRouter from './routes/applyRoute.js';
import showScholarshipRouter from './routes/showScholarshipRoute.js';
import isAdmin from './middleware/adminMiddleware.js';
import authenticateUser from './middleware/userMiddleware.js';
const app = express()


dotenv.config();

console.log(process.env.CLOUDINARY_API_KEY)

connectDb()

app.use(cors());
  
 
app.use(express.json())


app.get('/', (req , res) =>{
    res.send('Working')
})

app.use('/api/user' , userRouter)

app.use('/api/documents', documentRoutes);

app.use('/api/admin'  ,adminRouter)

app.use('/api/scholarships' , applyRouter)

app.use('/api/profile' ,showScholarshipRouter)


const PORT =  process.env.PORT || 4000 

app.listen(PORT , ()=>{
    console.log('Running' ,PORT)
})