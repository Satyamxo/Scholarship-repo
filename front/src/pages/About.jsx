import React from "react";
import {
  FaLaptop,
  FaUsers,
  FaCheckCircle,
  FaHandHoldingUsd,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 via-white to-gray-100 min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-800 to-black text-white py-20 px-6 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-6xl font-extrabold mb-6 animate-fadeInDown">
            Welcome to <span className="text-red-500">SAKSHAM</span>
          </h1>
          <p className="text-2xl font-light animate-fadeInUp max-w-3xl mx-auto">
            Redefining the scholarship application process with cutting-edge technology and simplicity. Join us in transforming dreams into reality.
          </p>
        </div>
        {/* Background Animations */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-red-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Key Features */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center text-black mb-10">
          Why <span className="text-red-500">SAKSHAM?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { icon: FaLaptop, color: "text-red-500", title: "100% Digital", description: "Experience a seamless, fully digital application process." },
            { icon: FaUsers, color: "text-yellow-500", title: "User-Friendly", description: "An interface designed for ease of use at every step." },
            { icon: FaCheckCircle, color: "text-green-500", title: "Verified Secure", description: "Your information is protected with advanced security protocols." },
            { icon: FaHandHoldingUsd, color: "text-purple-500", title: "Track Your Progress", description: "Stay updated on your application status in real time." },
            { icon: FaRocket, color: "text-orange-500", title: "Quick Processing", description: "Get your applications reviewed and approved faster than ever." },
            { icon: FaShieldAlt, color: "text-blue-500", title: "Trusted Platform", description: "Millions trust us to make their scholarship journey hassle-free." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
            >
              <feature.icon className={`text-6xl ${feature.color} mx-auto mb-4`} />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            At <span className="text-red-500 font-bold">SAKSHAM</span>, we envision a world where scholarships are accessible to all, breaking down barriers and empowering students to achieve their academic and career goals.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          How <span className="text-yellow-500">It Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              step: "1. Register",
              description: "Create an account and fill in your basic details.",
            },
            {
              step: "2. Apply",
              description: "Choose a scholarship that suits your needs and apply online.",
            },
            {
              step: "3. Track",
              description: "Monitor your application and get notified of updates.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-center"
            >
              <h3 className="text-2xl font-semibold mb-2 text-red-500">{item.step}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6">Join Over 1 Million Successful Applicants</h2>
        <p className="text-lg mb-8">
          Don’t miss out on the opportunity to shape your future. Start your scholarship journey with <span className="font-bold">SAKSHAM</span> today.
        </p>
        <button className="px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-md hover:bg-gray-900 transition duration-300">
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default About;
