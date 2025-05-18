import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';

const ScholarshipsList = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await axios.get('https://sc-back-y9w5.onrender.com/api/admin/scholarships');
        
        console.log('API Response:', response.data);
        
        if (Array.isArray(response.data)) {
          setScholarships(response.data);
        } else if (response.data.scholarships && Array.isArray(response.data.scholarships)) {
          setScholarships(response.data.scholarships);
        } else {
          toast.error('Unexpected response format.');
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch scholarships.');
      }
    };
    fetchScholarships();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this scholarship?')) return;

    try {
      await axios.delete(`https://sc-back-y9w5.onrender.com/api/admin/scholarships/${id}`);
      setScholarships((prev) => prev.filter((scholarship) => scholarship._id !== id));
      toast.success('Scholarship deleted successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete scholarship.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-indigo-100 p-10 mt-9">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-700 text-center mb-10">Scholarships List</h2>

        {Array.isArray(scholarships) && scholarships.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No scholarships available yet. 🧐</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(scholarships) && scholarships.map((scholarship) => (
              <div
                key={scholarship._id}
                className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{scholarship.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Amount:</span> ₹{scholarship.amount}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Criteria:</span> {scholarship.criteria}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Eligibility:</span> {scholarship.eligibility}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Valid From:</span> {new Date(scholarship.dateFrom).toLocaleDateString()} -{' '}
                  {new Date(scholarship.dateTo).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleDelete(scholarship._id)}
                  className="w-full py-2 bg-red-600 text-white rounded-lg flex items-center justify-center hover:bg-red-700 transition duration-300"
                >
                  <FaTrash className="mr-2" />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipsList;
