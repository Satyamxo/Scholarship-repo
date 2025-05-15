
import React from "react";
import Scholarship from "../components/Scholarship";
import { FaLightbulb, FaStar, FaRocket, FaHandsHelping } from "react-icons/fa";

const Scheme = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 mt-8">
      <section className="bg-gradient-to-r from-red-500 to-black text-white text-center p-8 rounded-lg shadow-lg mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Discover Your Scholarship</h1>
        <p className="text-lg">
          Empowering dreams with a wide range of scholarships. Explore opportunities to fund your education and achieve your goals.
        </p>
        <button className="bg-white text-red-500 font-bold mt-6 px-6 py-3 rounded-full hover:bg-gray-200 shadow-lg">
          Get Started
        </button>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Why Choose Our Scholarship Portal?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaLightbulb className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Trusted Platform</h3>
            <p className="text-gray-600 mt-2">Verified scholarships to ensure your time and effort lead to results.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaStar className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Exclusive Opportunities</h3>
            <p className="text-gray-600 mt-2">Find scholarships you won't find elsewhere, tailored to your needs.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaRocket className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Fast Updates</h3>
            <p className="text-gray-600 mt-2">Get real-time updates on deadlines, amounts, and application processes.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
            <FaHandsHelping className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Expert Guidance</h3>
            <p className="text-gray-600 mt-2">Step-by-step assistance to ensure you apply correctly and confidently.</p>
          </div>
        </div>
      </section>

      {/* Explore Scholarships Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Explore Scholarships</h2>
        <Scholarship />
      </section>

      <section className="bg-black text-white py-12 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Did You Know?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-extrabold text-red-500">50K+</h3>
            <p className="mt-2">Students funded worldwide</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-red-500">₹1 Cr+</h3>
            <p className="mt-2">Scholarship amount distributed</p>
          </div>
          <div>
            <h3 className="text-5xl font-extrabold text-red-500">99%</h3>
            <p className="mt-2">Student satisfaction rate</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-black to-red-500 text-white py-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Take the First Step Today</h2>
        <p className="mb-6">
          Don't let financial constraints stop you from achieving your dreams. Apply for a scholarship now!
        </p>
        <button className="bg-white text-red-500 font-bold px-6 py-3 rounded-full hover:bg-gray-200 shadow-lg">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default Scheme;


