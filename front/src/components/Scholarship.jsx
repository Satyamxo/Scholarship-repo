
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { FaRegMoneyBillAlt, FaUserShield, FaInfoCircle, FaRegClock } from "react-icons/fa"; // Added FaRegClock for duration

const Scholarship = () => {
    const [scholarships, setScholarships] = useState([]);

    const generateRandomColor = () => {
        const colors = [
            "bg-gradient-to-r from-pink-400 to-red-500",
            "bg-gradient-to-r from-blue-400 to-blue-600",
            "bg-gradient-to-r from-green-400 to-teal-500",
            "bg-gradient-to-r from-yellow-400 to-orange-500",
            "bg-gradient-to-r from-purple-400 to-indigo-500",
            "bg-gradient-to-r from-indigo-400 to-purple-600",
            "bg-gradient-to-r from-teal-400 to-blue-600"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect(() => {
        const fetchScholarships = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/scholarships');
                if (response.data.success) {
                    setScholarships(response.data.scholarships); 
                } else {
                    console.error('Failed to fetch scholarships');
                }
            } catch (error) {
                console.error('Error fetching scholarships:', error);
            }
        };

        fetchScholarships();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-6">
           
            <h1 className="text-4xl animate-bounce sm:text-5xl font-extrabold text-center mb-12 text-gray-800">
                Unlock Your Scholarship Opportunities 🎓
            </h1>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {scholarships.length === 0 ? (
                    <p className="text-center text-gray-600 text-lg">No scholarships available at the moment.</p>
                ) : (
                    scholarships.map((scholarship, index) => {
                        const randomColors = generateRandomColor();
                        return (
                            <div
                                key={scholarship._id}
                                className={`group relative ${randomColors} shadow-lg rounded-lg p-6 transition-transform transform hover:-translate-y-3 hover:scale-105 duration-300`}
                            >
                                {/* Title */}
                                <h2 className="text-2xl font-bold text-black mb-4">{scholarship.name}</h2>

                              
                                <div className="text-gray-800 group-hover:text-white leading-relaxed mb-4">
                                    <div className="flex items-center mb-2">
                                        <FaUserShield className="text-black mr-2" />
                                        <p><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaInfoCircle className="text-black mr-2" />
                                        <p><strong>Criteria:</strong> {scholarship.criteria}</p>
                                    </div>
                                </div>

                                
                                <div className="text-gray-800 group-hover:text-white leading-relaxed mb-6">
                                    <div className="flex items-center mb-2">
                                        <FaRegMoneyBillAlt className="text-black mr-2" />
                                        <p><strong>Amount:</strong> ₹{scholarship.amount}</p>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <FaRegClock className="text-black mr-2" />
                                        <p><strong>Duration:</strong> {new Date(scholarship.dateFrom).toLocaleDateString()} - {new Date(scholarship.dateTo).toLocaleDateString()}</p>
                                    </div>
                                </div>

                              
                                <Link to={`/apply/${scholarship._id}`} 
      className="px-6 py-2 text-sm font-semibold bg-black text-white rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl transition duration-300">
    Apply Now
</Link>


                              
                                <div
                                    className="absolute -top-3 -left-3 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-lg shadow-md 
                                    group-hover:bg-gray-800 group-hover:text-white transition-all duration-300"
                                >
                                    New
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Scholarship;
