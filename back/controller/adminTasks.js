import ScholarshipApplication from '../models/applyScholarship.js';
import scholarship from "../models/ScholarshipModel.js"

const createScholarship = async (req, res) => {
    try {

        const { name, amount, eligibility, criteria, dateTo, dateFrom } = req.body

        const saveScholarship = new scholarship({
            name, criteria, amount, eligibility, dateTo, dateFrom
        })

        await saveScholarship.save()
        return res.status(201).json({ success: true, message: "Scholarship Created" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Failed To Create Scholarship " })
    }


}


const deleteScholarship = async (req, res) => {

    try {

        const { id } = req.params


        const deleteScholarship = await scholarship.findByIdAndDelete(id)

        if (!deleteScholarship) {
            return res.status(404).json({
                success: false,
                message: 'Scholarship not found',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Scholarship Deleted',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete scholarship',
            error: error.message,
        });
    }
}




const getAllScholarships = async (req, res) => {
    try {
        const scholarships = await scholarship.find(); 
        res.status(200).json({
            success: true,
            scholarships,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch scholarships',
        });
    }
};


const getAllAppliedScholarships = async (req, res) => {
    try {
        const scholarships = await ScholarshipApplication.find(); 
        res.status(200).json({
            success: true,
            scholarships,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch scholarships',
        });
    }
};




  

const changeScholarshipStatus = async (req, res) => {
    const { scholarshipApplicationId, newStatus } = req.body;
  
    try {
      const validStatuses = ['Pending', 'Approved', 'Rejected', 'Seen by Admin'];
      if (!validStatuses.includes(newStatus)) {
        return res.status(400).json({ message: 'Invalid status provided.' });
      }
  
      if (!scholarshipApplicationId || !newStatus) {
        return res.status(400).json({ message: 'Application ID and new status are required.' });
      }
  
      const scholarshipApplication = await ScholarshipApplication.findById(scholarshipApplicationId);
  
      if (!scholarshipApplication) {
        return res.status(404).json({ message: 'Scholarship application not found.' });
      }
  
      console.log(`Updating scholarship application ${scholarshipApplicationId} to status ${newStatus}`);
  
      scholarshipApplication.status = newStatus;
  
      await scholarshipApplication.save();
  
      return res.status(200).json({
        success: true, 
        message: 'Scholarship status updated successfully.',
        updatedApplication: scholarshipApplication, 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Server error. Could not update status.' });
    }
  };
  

export { createScholarship , deleteScholarship , getAllScholarships ,changeScholarshipStatus ,getAllAppliedScholarships}