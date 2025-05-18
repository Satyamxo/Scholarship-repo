


import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScholarshipManagement = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchScholarships();
  }, []);

  // Fetch the scholarships from the API
  const fetchScholarships = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://scholarships-back.onrender.com/api/admin/all-scholarships");
      if (response.data.success) {
        setApplications(response.data.scholarships);
      } else {
        toast.error("Failed to fetch scholarships!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch scholarships!");
    } finally {
      setLoading(false);
    }
  };

  // Handle the status change for each scholarship application
  const handleStatusChange = async (applicationId, newStatus) => {
    try {
      const response = await axios.put("http://localhost:8000/api/admin/status", {
        scholarshipApplicationId: applicationId,
        newStatus: newStatus,
      });
      if (response.data.success) {
        toast.success("Scholarship status updated successfully!");
        fetchScholarships(); // Re-fetch scholarships to update the table
      } else {
        toast.error("Failed to update status.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-20">
      <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
        Scholarship Management
      </h1>
      {loading ? (
        <p className="text-center">Loading scholarships...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white text-sm uppercase font-medium">
                <th className="px-4 py-2 whitespace-nowrap">Applicant</th>
                <th className="px-4 py-2 whitespace-nowrap">Father's Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Aadhar Number</th>
                <th className="px-4 py-2 whitespace-nowrap">PAN Number</th>
                <th className="px-4 py-2 whitespace-nowrap">10th %</th>
                <th className="px-4 py-2 whitespace-nowrap">12th %</th>
                <th className="px-4 py-2 whitespace-nowrap">UG %</th>
                <th className="px-4 py-2 whitespace-nowrap">PG %</th>
                <th className="px-4 py-2 whitespace-nowrap">Bank Account</th>
                <th className="px-4 py-2 whitespace-nowrap">IFSC Code</th>
                <th className="px-4 py-2 whitespace-nowrap">Scholarship Name</th>
                <th className="px-4 py-2 whitespace-nowrap">Created At</th>
                <th className="px-4 py-2 whitespace-nowrap">Status</th>
                <th className="px-4 py-2 whitespace-nowrap">User</th>
                <th className="px-4 py-2 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr
                  key={application._id}
                  className="border-b hover:bg-gray-100 text-sm"
                >
                  <td className="px-4 py-2 whitespace-nowrap">{application.firstName} {application.lastName}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.fatherName}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.aadharNumber}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.panNumber}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.tenthPercentage}%</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.twelfthPercentage}%</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.ugPercentage}%</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.pgPercentage}%</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.bankAccount}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.ifscCode}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{application.scholarshipName}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    {new Date(application.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span
                      className={`font-semibold ${
                        application.status === "Approved"
                          ? "text-green-600"
                          : application.status === "Rejected"
                          ? "text-red-600"
                          : "text-yellow-500"
                      }`}
                    >
                      {application.status}
                    </span>
                  </td>
                  <td>
                    <Link to={`/view/${application.userId}`} className="border border-b-8 p-2">Documents</Link>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <select
                      className="px-3 py-1 border rounded-md"
                      onChange={(e) =>
                        handleStatusChange(application._id, e.target.value)
                      }
                      defaultValue={application.status}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Seen by Admin">Seen by Admin</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ScholarshipManagement;



