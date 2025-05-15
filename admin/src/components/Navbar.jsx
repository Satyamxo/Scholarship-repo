
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';  
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const navigate = useNavigate(); 

  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);


  const handleLogout = () => {
    
    localStorage.removeItem('adminToken'); 
    
    navigate('/login');
  };

  return (
    <div>
    
      <nav className="bg-white shadow-md py-4 px-8 fixed top-0 left-0 w-full z-10">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" className="w-64" />

          
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink 
              to="/" 
              className="text-gray-800 hover:text-indigo-600 font-semibold"
              activeClassName="text-indigo-600"
            >
              Create
            </NavLink>
            <NavLink 
              to="/delete" 
              className="text-gray-800 hover:text-indigo-600 font-semibold"
              activeClassName="text-indigo-600"
            >
              Delete
            </NavLink>
            <NavLink 
              to="/manage" 
              className="text-gray-800 hover:text-indigo-600 font-semibold"
              activeClassName="text-indigo-600"
            >
              Manage
            </NavLink>

            {/* Logout Button for large screens */}
            <button 
              onClick={handleLogout} 
              className="text-gray-800 hover:text-red-600 font-semibold"
            >
              Logout
            </button>
          </div>

          
          <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
            <FaBars size={24} />
          </div>
        </div>
      </nav>

      {/* Sidebar for small screens */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-all duration-300 ${isSidebarOpen ? 'block' : 'hidden'}`} 
        onClick={toggleSidebar}
      ></div>

      <div 
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} 
        style={{ zIndex: 30 }}
      >
        <div className="flex justify-end p-4">
          <FaTimes size={24} className="cursor-pointer" onClick={toggleSidebar} />
        </div>

        <div className="flex flex-col p-6 space-y-4">
          <NavLink 
            to="/" 
            className="text-gray-800 hover:text-indigo-600 font-semibold"
            activeClassName="text-indigo-600"
            onClick={toggleSidebar}
          >
           Create
          </NavLink>
          <NavLink 
            to="/delete" 
            className="text-gray-800 hover:text-indigo-600 font-semibold"
            activeClassName="text-indigo-600"
            onClick={toggleSidebar}
          >
            Delete
          </NavLink>
          <NavLink 
            to="/manage" 
            className="text-gray-800 hover:text-indigo-600 font-semibold"
            activeClassName="text-indigo-600"
            onClick={toggleSidebar}
          >
            Manage
          </NavLink>

          
          <button 
            onClick={handleLogout} 
            className="text-gray-800 hover:text-red-600 font-semibold mt-4"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
