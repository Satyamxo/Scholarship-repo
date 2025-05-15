import mongoose from 'mongoose';

const documentSchema = new mongoose.Schema({
  userId: { type: String, required: true , index: true },
  documents: [
    {
      name: { type: String, required: true },
      filePath: { type: String, required: true },
      cloudinaryId: { type: String, required: true },
    },
  ],
}, { timestamps: true });

export default mongoose.model('Document', documentSchema);  