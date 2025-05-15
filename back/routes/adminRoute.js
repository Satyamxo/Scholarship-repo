import express from "express"
import { adminController } from "../controller/auth.js"
import { createScholarship, deleteScholarship, getAllScholarships ,changeScholarshipStatus, getAllAppliedScholarships} from "../controller/adminTasks.js"
const adminRouter = express.Router()

adminRouter.post("/login" , adminController)
adminRouter.post("/create" , createScholarship)
adminRouter.delete("/scholarships/:id" , deleteScholarship)
adminRouter.get("/all-scholarships" , getAllAppliedScholarships)
adminRouter.get("/scholarships" , getAllScholarships)
adminRouter.put("/status" , changeScholarshipStatus)
changeScholarshipStatus
export default adminRouter