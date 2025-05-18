
import React, { useState, useEffect } from "react";


const ViewDocumentsPage = ({ userId }) => {
  const [documentsData, setDocumentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    console.log(userId)
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`https://scholarships-back.onrender.com/api/documents/view/${userId}`);
        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch documents");
        }
        const data = await response.json();
        setDocumentsData(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchDocuments();
  }, [userId]); 

  if (loading) {
    return <p>Loading...</p>; 
  }
  if (documentsData.length === 0 || !documentsData[0]?.documents?.length) {
    return <p className="m-72 text-center">No documents available.</p>; 
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>; 
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Documents List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentsData.map((doc) => (
          doc.documents.map((document) => (
            <div
              key={document._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="flex flex-col items-center p-4">
                {/* Document image */}
                <img
                  src={document.filePath}
                  alt={document.name}
                  className="w-full h-48 object-cover mb-4"
                />
                
                <h2 className="text-xl font-semibold mb-2">{document.name}</h2>
                <p className="text-sm text-gray-600 mb-4">
                  Uploaded on: {new Date(doc.createdAt).toLocaleDateString()}
                </p>
                <a
                  href={document.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Document
                </a>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default ViewDocumentsPage;
