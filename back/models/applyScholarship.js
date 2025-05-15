import mongoose from 'mongoose';

const scholarshipApplicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fatherName: { type: String, required: true },
  aadharNumber: { type: String, required: true, unique: false },
  panNumber: { type: String, required: true },
  tenthPercentage: { type: Number, required: true },
  twelfthPercentage: { type: Number, required: true },
  ugPercentage: { type: Number, required: false }, 
  pgPercentage: { type: Number, required: false }, 
  bankAccount: { type: String, required: true },
  ifscCode: { type: String, required: true },
  scholarshipId: { type: String, required: true },
  scholarshipName: { type: String, required: true },  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  status: { 
    type: String, 

    default: 'Pending' 
  },
  createdAt: { type: Date, default: Date.now }, 
});

const ScholarshipApplication = mongoose.model('ScholarshipApplication', scholarshipApplicationSchema);
export default ScholarshipApplication;
