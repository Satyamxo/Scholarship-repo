import express from 'express';
import { upload } from '../config/cloudinary.js';
import { uploadDocuments, getUserDocuments, deleteDocument } from '../controller/documentController.js';

const router = express.Router();

router.post('/upload', upload.array('documents', 10), uploadDocuments);
router.get('/view/:userId', getUserDocuments); 
router.delete('/delete', deleteDocument); 


export default router;
