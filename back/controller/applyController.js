


import ScholarshipApplication from "../models/applyScholarship.js";
import Scholarship from "../models/ScholarshipModel.js";

const submitScholarshipForm = async (req, res) => {
  try {
    const { scholarshipId } = req.params;
console.log("Request body:", req.body);

    const { userId } = req.body;

    if (!scholarshipId) {
      return res.status(400).json({ message: "Scholarship ID is required." });
    }

    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const {
      firstName,
      lastName,
      fatherName,
      aadharNumber,
      panNumber,
      tenthPercentage,
      twelfthPercentage,
      ugPercentage,
      pgPercentage,
      bankAccount,
      ifscCode,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !fatherName ||
      !aadharNumber ||
      !panNumber ||
      !bankAccount ||
      !ifscCode
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    const scholarship = await Scholarship.findById(scholarshipId);
    if (!scholarship) {
      return res
        .status(404)
        .json({ message: "Scholarship not found with the provided ID." });
    }

    const newApplication = new ScholarshipApplication({
      firstName,
      lastName,
      fatherName,
      aadharNumber,
      panNumber,
      tenthPercentage,
      twelfthPercentage,
      ugPercentage,
      pgPercentage,
      bankAccount,
      ifscCode,
      scholarshipId, 
      scholarshipName: scholarship.name, 
      userId, 
    });

    const savedApplication = await newApplication.save();

    res.status(201).json({
      message: "Scholarship application submitted successfully!",
      application: savedApplication,
    });
  } catch (error) {
    console.error("Error saving scholarship application:", error);
    res
      .status(500)
      .json({ message: "Error saving application. Please try again later." });
  }
};

export { submitScholarshipForm };

