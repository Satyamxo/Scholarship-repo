import React, { useState, useEffect } from "react";
import axios from "axios";

const YourScholarships = ({ userId }) => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchScholarships = async () => {
      console.log(userId)
      try {
        const response = await axios.post(
          "https://sc-back-y9w5.onrender.com/api/profile/your-scholarships", 
          { userId } 
        );
        setScholarships(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load scholarships. Please try again later.");
        setLoading(false);
      }
    };
    fetchScholarships();
  }, [userId]);

  // Loader
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-40">
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-10">
        <div className="text-lg font-medium text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Scholarships You've Applied For
        </h1>
        {scholarships.length === 0 ? (
          <div className="text-gray-700 text-center">No scholarships found.</div>
        ) : (
          <div className="overflow-x-auto mt-40">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="border px-4 py-2 text-left">Scholarship Name</th>
                  <th className="border px-4 py-2 text-left">Eligibility</th>
                  <th className="border px-4 py-2 text-left">Criteria</th>
                  <th className="border px-4 py-2 text-left">Application Date</th>
                  <th className="border px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((scholarship, index) => (
                  <tr
                    key={scholarship._id}
                    className={`border ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                  >
                    <td className="border px-4 py-2 text-gray-800">
                      {scholarship.details?.name || "N/A"}
                    </td>
                    <td className="border px-4 py-2 text-gray-600">
                      {scholarship.details?.eligibility || "N/A"}
                    </td>
                    <td className="border px-4 py-2 text-gray-600">
                      {scholarship.details?.criteria || "General"}
                    </td>
                    <td className="border px-4 py-2 text-gray-600">
                      {new Date(scholarship.createdAt).toLocaleDateString() || "N/A"}
                    </td>
                    <td className="border px-4 py-2">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          scholarship.status === "Approved"
                            ? "bg-green-200 text-green-800"
                            : scholarship.status === "Rejected"
                            ? "bg-red-200 text-red-800"
                            : "bg-yellow-200 text-yellow-800"
                        }`}
                      >
                        {scholarship.status || "Pending"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourScholarships;
