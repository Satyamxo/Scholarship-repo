import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ScholarshipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    criteria: '',
    eligibility: '',
    dateFrom: '',
    dateTo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/admin/create', formData); // Replace with your API endpoint
      if (response.status === 201) {
        toast.success('Scholarship uploaded successfully!');
        setFormData({
          name: '',
          amount: '',
          criteria: '',
          eligibility: '',
          dateFrom: '',
          dateTo: '',
        });
      } else {
        toast.error('Failed to upload scholarship. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-100 flex items-start py-10">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-8 text-center">
          Upload New Scholarship
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Scholarship Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Scholarship Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter scholarship name"
              required
            />
          </div>

          {/* Scholarship Amount */}
          <div>
            <label htmlFor="amount" className="block text-lg font-medium text-gray-700">
              Scholarship Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter scholarship amount"
              required
            />
          </div>

          {/* Criteria */}
          <div className="sm:col-span-2">
            <label htmlFor="criteria" className="block text-lg font-medium text-gray-700">
              Criteria
            </label>
            <textarea
              id="criteria"
              name="criteria"
              value={formData.criteria}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter criteria details"
              rows="4"
              required
            />
          </div>

          {/* Eligibility */}
          <div className="sm:col-span-2">
            <label htmlFor="eligibility" className="block text-lg font-medium text-gray-700">
              Eligibility
            </label>
            <textarea
              id="eligibility"
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter eligibility details"
              rows="4"
              required
            />
          </div>

          {/* Date From */}
          <div>
            <label htmlFor="dateFrom" className="block text-lg font-medium text-gray-700">
              Date From
            </label>
            <input
              type="date"
              id="dateFrom"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Date To */}
          <div>
            <label htmlFor="dateTo" className="block text-lg font-medium text-gray-700">
              Date To
            </label>
            <input
              type="date"
              id="dateTo"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Upload Scholarship
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScholarshipForm;
