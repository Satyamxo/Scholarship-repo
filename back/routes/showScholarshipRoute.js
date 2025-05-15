import express from "express"
import { getScholarshipData } from "../controller/ShowScholarships.js"
const showScholarshipRouter = express.Router()


showScholarshipRouter.post('/your-scholarships', getScholarshipData)

export default showScholarshipRouter