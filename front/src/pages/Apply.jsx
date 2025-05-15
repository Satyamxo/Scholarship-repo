
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const ApplyNow = ({ userId }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();
  
//  const{ scholarshipId } = useParams();  
  
//   const onSubmit = async (data) => {
//       setLoading(true);
//       console.log(scholarshipId);  // C
//     try {
   
//       const applicationData = { ...data, userId };

     
//       const response = await axios.post(
//         `http://localhost:8000/api/scholarships/apply/${scholarshipId}`,
//         applicationData
//       );
  
//       if (response.status === 201) {
//         setMessage('Application submitted successfully!');
//         toast.success('Application submitted successfully!');
//         navigate('/upload');
//       } else {
//         setMessage('Application submission failed. Please try again.');
//         toast.error('Application submission failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting application:', error);
//       setMessage('An error occurred. Please try again.');
//       toast.error('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Apply for Scholarship</h1>
      
//       {message && (
//         <div className="text-center mb-4">
//           <p className={`text-lg ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
//             {message}
//           </p>
//         </div>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div className="flex space-x-4">
//           <div className="w-full">
//             <label htmlFor="firstName" className="block text-gray-700">First Name</label>
//             <input
//               id="firstName"
//               type="text"
//               {...register('firstName', { required: 'First Name is required' })}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//             {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
//           </div>
//           <div className="w-full">
//             <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
//             <input
//               id="lastName"
//               type="text"
//               {...register('lastName', { required: 'Last Name is required' })}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//             {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
//           </div>
//         </div>

//         <div className="w-full">
//           <label htmlFor="fatherName" className="block text-gray-700">Father's Name</label>
//           <input
//             id="fatherName"
//             type="text"
//             {...register('fatherName', { required: 'Father\'s Name is required' })}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//           />
//           {errors.fatherName && <p className="text-red-500 text-sm">{errors.fatherName.message}</p>}
//         </div>

//         <div className="flex space-x-4">
//           <div className="w-full">
//             <label htmlFor="aadharNumber" className="block text-gray-700">Aadhar Number</label>
//             <input
//               id="aadharNumber"
//               type="text"
//               {...register('aadharNumber', { required: 'Aadhar Number is required' })}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//             {errors.aadharNumber && <p className="text-red-500 text-sm">{errors.aadharNumber.message}</p>}
//           </div>
//           <div className="w-full">
//             <label htmlFor="panNumber" className="block text-gray-700">PAN Number</label>
//             <input
//               id="panNumber"
//               type="text"
//               {...register('panNumber', { required: 'PAN Number is required' })}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//             {errors.panNumber && <p className="text-red-500 text-sm">{errors.panNumber.message}</p>}
//           </div>
//         </div>

//         <div className="flex space-x-4">
//           <div className="w-full">
//             <label htmlFor="tenthPercentage" className="block text-gray-700">10th Percentage</label>
//             <input
//               id="tenthPercentage"
//               type="number"
//               {...register('tenthPercentage', { required: '10th Percentage is required' })}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//             {errors.tenthPercentage && <p className="text-red-500 text-sm">{errors.tenthPercentage.message}</p>}
//           </div>
//           <div className="w-full">
//             <label htmlFor="twelfthPercentage" className="block text-gray-700">12th Percentage</label>
//             <input
//               id="twelfthPercentage"
//               type="number"
//               {...register('twelfthPercentage', { required: '12th Percentage is required' })}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//             {errors.twelfthPercentage && <p className="text-red-500 text-sm">{errors.twelfthPercentage.message}</p>}
//           </div>
//         </div>

//         <div className="w-full">
//           <label htmlFor="ugPercentage" className="block text-gray-700">UG Percentage (Optional)</label>
//           <input
//             id="ugPercentage"
//             type="number"
//             {...register('ugPercentage')}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div className="w-full">
//           <label htmlFor="pgPercentage" className="block text-gray-700">PG Percentage (Optional)</label>
//           <input
//             id="pgPercentage"
//             type="number"
//             {...register('pgPercentage')}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div className="flex space-x-4">
//           <div className="w-full">
//             <label htmlFor="bankAccount" className="block text-gray-700">Bank Account Number</label>
//             <input
//               id="bankAccount"
//               type="text"
//               {...register('bankAccount', { required: 'Bank Account Number is required' })}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//             {errors.bankAccount && <p className="text-red-500 text-sm">{errors.bankAccount.message}</p>}
//           </div>
//           <div className="w-full">
//             <label htmlFor="ifscCode" className="block text-gray-700">IFSC Code</label>
//             <input
//               id="ifscCode"
//               type="text"
//               {...register('ifscCode', { required: 'IFSC Code is required' })}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             />
//             {errors.ifscCode && <p className="text-red-500 text-sm">{errors.ifscCode.message}</p>}
//           </div>
//         </div>

//         <div className="text-center mt-6">
//           <button
//             type="submit"
//             className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md w-full"
//             disabled={loading}
//           >
//             {loading ? 'Submitting...' : 'Apply Now'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ApplyNow;

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ApplyNow = ({ userId }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [scholarships, setScholarships] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const { scholarshipId } = useParams();  

  // Function to fetch scholarships
  const fetchScholarships = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/profile/your-scholarships",
        { userId }
      );
      setScholarships(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load scholarships. Please try again later.");
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const applicationData = { ...data, userId };

      const response = await axios.post(
        `http://localhost:8000/api/scholarships/apply/${scholarshipId}`,
        applicationData
      );

      if (response.status === 201) {
        setMessage('Application submitted successfully!');
        toast.success('Application submitted successfully!');
        
        await fetchScholarships(); 

        if (scholarships.length === 0) {
          navigate('/upload');  
        } else {
          navigate('/'); 
        }
      } else {
        setMessage('Application submission failed. Please try again.');
        toast.error('Application submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setMessage('An error occurred. Please try again.');
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScholarships();  
  }, []);  

     return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Apply for Scholarship</h1>
          
          {message && (
            <div className="text-center mb-4">
              <p className={`text-lg ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            </div>
          )}
    
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-full">
                <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  {...register('firstName', { required: 'First Name is required' })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  {...register('lastName', { required: 'Last Name is required' })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>
    
            <div className="w-full">
              <label htmlFor="fatherName" className="block text-gray-700">Father's Name</label>
              <input
                id="fatherName"
                type="text"
                {...register('fatherName', { required: 'Father\'s Name is required' })}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              />
              {errors.fatherName && <p className="text-red-500 text-sm">{errors.fatherName.message}</p>}
            </div>
    
            <div className="flex space-x-4">
              <div className="w-full">
                <label htmlFor="aadharNumber" className="block text-gray-700">Aadhar Number</label>
                <input
                  id="aadharNumber"
                  type="text"
                  {...register('aadharNumber', { required: 'Aadhar Number is required' })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                {errors.aadharNumber && <p className="text-red-500 text-sm">{errors.aadharNumber.message}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="panNumber" className="block text-gray-700">PAN Number</label>
                <input
                  id="panNumber"
                  type="text"
                  {...register('panNumber', { required: 'PAN Number is required' })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                {errors.panNumber && <p className="text-red-500 text-sm">{errors.panNumber.message}</p>}
              </div>
            </div>
    
            <div className="flex space-x-4">
              <div className="w-full">
                <label htmlFor="tenthPercentage" className="block text-gray-700">10th Percentage</label>
                <input
                  id="tenthPercentage"
                  type="number"
                  {...register('tenthPercentage', { required: '10th Percentage is required' })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                {errors.tenthPercentage && <p className="text-red-500 text-sm">{errors.tenthPercentage.message}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="twelfthPercentage" className="block text-gray-700">12th Percentage</label>
                <input
                  id="twelfthPercentage"
                  type="number"
                  {...register('twelfthPercentage', { required: '12th Percentage is required' })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                {errors.twelfthPercentage && <p className="text-red-500 text-sm">{errors.twelfthPercentage.message}</p>}
              </div>
            </div>
    
            <div className="w-full">
              <label htmlFor="ugPercentage" className="block text-gray-700">UG Percentage (Optional)</label>
              <input
                id="ugPercentage"
                type="number"
                {...register('ugPercentage')}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              />
            </div>
    
            <div className="w-full">
              <label htmlFor="pgPercentage" className="block text-gray-700">PG Percentage (Optional)</label>
              <input
                id="pgPercentage"
                type="number"
                {...register('pgPercentage')}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              />
            </div>
    
            <div className="flex space-x-4">
              <div className="w-full">
                <label htmlFor="bankAccount" className="block text-gray-700">Bank Account Number</label>
                <input
                  id="bankAccount"
                  type="text"
                  {...register('bankAccount', { required: 'Bank Account Number is required' })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                {errors.bankAccount && <p className="text-red-500 text-sm">{errors.bankAccount.message}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="ifscCode" className="block text-gray-700">IFSC Code</label>
                <input
                  id="ifscCode"
                  type="text"
                  {...register('ifscCode', { required: 'IFSC Code is required' })}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
                {errors.ifscCode && <p className="text-red-500 text-sm">{errors.ifscCode.message}</p>}
              </div>
            </div>
    
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md w-full"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Apply Now'}
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default ApplyNow;