import Document from '../models/documentsModel.js';
import { cloudinary } from '../config/cloudinary.js';

export const uploadDocuments = async (req, res) => {
  try {
    const documentEntries = req.files.map((file) => ({
      name: file.originalname,
      filePath: file.path,
      cloudinaryId: file.filename,
    }));

    const newDocument = new Document({
      userId: req.body.userId || 'guest',
      documents: documentEntries,
    });

    await newDocument.save();
    res.status(201).json({ message: 'Documents uploaded successfully', documents: newDocument });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload documents', details: error.message });
  }
};

// Get documents by userId
export const getUserDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ userId: req.params.userId });
    if (!documents) {
      return res.status(404).json({ error: 'No documents found for this user' });
    }
    console.log(documents)
    res.status(200).json(documents);
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch documents', details: error.message });
  }
};




export const deleteDocument = async (req, res) => {
  try {
    const { documentId, cloudinaryId } = req.body;

    if (!documentId || !cloudinaryId) {
      return res.status(400).json({ error: "Missing documentId or cloudinaryId" });
    }

  
    await cloudinary.uploader.destroy(cloudinaryId, { resource_type: 'auto' });

    const result = await Document.updateOne(
      { 'documents._id': documentId },
      { $pull: { documents: { _id: documentId } } }
    );

 
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.status(200).json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Failed to delete document', details: error.message });
  }
};
