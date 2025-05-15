import React from 'react';
import { FaUserCircle, FaPhoneAlt, FaEnvelope, FaUpload, FaEye, FaClipboardCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfilePage = ({ user }) => {
  const { name, phone, email, scholarshipStatus } = user;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen text-gray-800 font-sans mt-8">
      <div className="py-16 px-6 flex justify-center items-center flex-col bg-white shadow-lg rounded-lg mx-6 mb-12">
        <div className="bg-gradient-to-br from-indigo-400 to-blue-600 p-6 rounded-full shadow-lg">
          <FaUserCircle className="text-9xl text-white" />
        </div>
        <h1 className="text-4xl font-semibold mt-6 text-gray-800">{name}</h1>
        <p className="mt-4 text-lg text-gray-600 flex items-center">
          <FaPhoneAlt className="mr-2 text-gray-600" />
          {phone}
        </p>
        <p className="mt-2 text-lg text-gray-600 flex items-center">
          <FaEnvelope className="mr-2 text-gray-600" />
          {email}
        </p>
      </div>

      <section className="py-16 bg-gradient-to-r from-green-300 to-blue-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-white mb-12">
            Your Profile Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 hover:shadow-xl transition-shadow duration-300">
              <FaUpload className="text-6xl text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-center text-gray-800">Upload Documents</h3>
              <p className="text-center text-gray-600 mt-4">
                Safely upload and store your documents here.
              </p>
              <div className="mt-8 flex justify-center">
                <Link to='/upload' className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-md font-medium hover:bg-pink-600 transition-colors">
                  Upload Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 hover:shadow-xl transition-shadow duration-300">
              <FaEye className="text-6xl text-teal-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-center text-gray-800">View Documents</h3>
              <p className="text-center text-gray-600 mt-4">
                Access all your uploaded documents here.
              </p>
              <div className="mt-8 flex justify-center">
                <Link to={`/view/${user.userId}`} className="px-6 py-3 bg-teal-500 text-white rounded-full shadow-md font-medium hover:bg-teal-600 transition-colors">
                  View Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 hover:shadow-xl transition-shadow duration-300">
              <FaClipboardCheck className="text-6xl text-yellow-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-center text-gray-800">Track Scholarship Status</h3>
              <p className="text-center text-gray-600 mt-4">
                {scholarshipStatus === 'Not Applied' ? (
                  <span className="text-red-500">You haven't applied for any scholarships yet.</span>
                ) : (
                  <span className="text-green-500">Your application is {scholarshipStatus}.</span>
                )}
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/your-scholarships" className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md font-medium hover:bg-yellow-600 transition-colors">
                  {scholarshipStatus === 'Not Applied' ? 'Apply Now' : 'Track Status'}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
