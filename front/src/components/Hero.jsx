
import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg"
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white h-screen flex items-center justify-center">
     
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${hero}) ` }}></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl opacity-20"></div>

     
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-8 space-y-8 max-w-4xl">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-wide leading-tight animate-fade-in">
          Empower Your Dreams with <span className="text-yellow-400">SAKSHAM</span>
        </h1>
        <p className="text-xl sm:text-2xl font-medium leading-relaxed animate-fade-up">
          A fully digital platform for secure and seamless scholarship management.
        </p>

      
        <div className="flex space-x-6 animate-slide-in">
          <Link
            to="/schemes"
            className="bg-yellow-400 text-blue-900 font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-yellow-500 transform transition hover:scale-110"
          >
            Apply Now for Scholarship <FaArrowRight className="inline ml-2" />
          </Link>
          

<Link
  to='/about' 
  className="bg-transparent border border-white text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-white hover:text-blue-900 transform transition hover:scale-110"
>
  Learn More
</Link>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
