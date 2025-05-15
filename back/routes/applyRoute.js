import express from "express"
import { submitScholarshipForm } from "../controller/applyController.js"
const applyRouter = express.Router()


applyRouter.post("/apply/:scholarshipId" ,submitScholarshipForm)



export default applyRouter