import Scholarship from '../models/applyScholarship.js';
import ScholarshipDetails from '../models/ScholarshipModel.js';
import mongoose from 'mongoose';

const getScholarshipData = async (req, res) => {
  const { userId } = req.body; // Access userId from request body

  try {
    
    const appliedScholarships = await Scholarship.find({ userId });

    if (!appliedScholarships.length) {
      return res.status(404).json({ message: 'No scholarships found for this user.' });
    }

  
    const scholarshipDetails = await Promise.all(
      appliedScholarships.map(async (scholarship) => {
        if (!mongoose.Types.ObjectId.isValid(scholarship.scholarshipId)) {
          return {
            ...scholarship.toObject(),
            details: null, 
          };
        }

        const details = await ScholarshipDetails.findById(scholarship.scholarshipId);
        return {
          ...scholarship.toObject(),
          details: details || null, 
        };
      })
    );

    res.status(200).json(scholarshipDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { getScholarshipData };
