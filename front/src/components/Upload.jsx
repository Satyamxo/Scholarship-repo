

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const DocumentUpload = ({ userId }) => {
  const requiredDocuments = [
    { id: 1, name: 'Adhar Card ' },
    { id: 2, name: 'Pan Card' },
    { id: 3, name: '10 Marksheet' },
    { id: 4, name: '12 Marksheet' },
    { id: 5, name: 'Latest UG/PG Marksheet' },
    { id: 6, name: 'Caste Certificate' },
    { id: 7, name: 'Bank Details' },
  ];

  const [files, setFiles] = useState(
    requiredDocuments.map((doc) => ({ ...doc, file: null }))
  );
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate(); 

  const handleFileChange = (index, selectedFile) => {
    setFiles((prevFiles) =>
      prevFiles.map((item, i) => (i === index ? { ...item, file: selectedFile } : item))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.some((item) => !item.file)) {
      setMessage('Please upload all required documents.');
      return;
    }

    const formData = new FormData();
    files.forEach(({ file, name }) => {
      formData.append('documents', file);
      formData.append('docNames', name);
    });
    formData.append('userId', userId);

    try {
      setUploading(true);
      setMessage('');
      const response = await axios.post(
        'https://scholarships-back.onrender.com/api/documents/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (progressEvent) => {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percent);
          },
        }
      );

      setMessage('Successfully applied for the scholarship!');
      toast.success("Successfully applied for the scholarship!")
      setFiles(
        requiredDocuments.map((doc) => ({ ...doc, file: null })) 
      );
      setProgress(0);

      setTimeout(() => {
        navigate('/');
      }, 3000); 
    } catch (error) {
      console.error(error);
      setMessage('Failed to upload documents. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full hover:shadow-xl mt-9">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Upload Your Documents
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {files.map((item, index) => (
            <div key={item.id} className="bg-gray-100 p-4 rounded-lg space-y-2">
              <label className="text-gray-600 font-medium">
                {item.name}
              </label>
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                className="w-full p-2 border border-indigo-500 rounded-lg"
              />
              {item.file && (
                <p className="text-sm text-green-600">Selected: {item.file.name}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 transform"
            disabled={uploading}
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </form>

        {uploading && (
          <div className="w-full mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center text-gray-600">{progress}%</p>
          </div>
        )}

        {message && (
          <p
            className={`mt-4 text-center text-lg ${
              message.includes('Failed') ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
