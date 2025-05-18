

import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaSignInAlt } from "react-icons/fa";
import logo from "../assets/logo.png"

const Navbar = ({setUser}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsSidebarOpen(false); 
    setUser(null)
    navigate("/login");
  };

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/schemes", label: "Schemes" },
    { path: "/support", label: "Support" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
       
        <img src={logo} className="w-64"  />

        <button
          className="text-gray-600 text-2xl sm:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

      
        <div className="hidden sm:flex sm:items-center sm:space-x-6">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 transition relative ${
                  isActive ? "text-blue-600 font-bold" : ""
                }`
              }
              style={({ isActive }) => ({
                position: "relative",
                paddingBottom: isActive ? "4px" : "",
                borderBottom: isActive ? "2px solid #0b032d" : "",
              })}
            >
              {route.label}
            </NavLink>
          ))}
        </div>

        
        <div className="hidden sm:flex sm:items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link
                to="/profile"
                className="text-gray-600 text-xl hover:text-blue-600 transition"
              >
                <FaUser />
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-1 px-4 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
<NavLink to="https://sc-admin.onrender.com/">
              <button
                // onClick={}
                className=" bg-black text-white py-1 px-4 rounded-full hover:bg-red-600 transition"
              >
                Admin
              </button>
              </NavLink>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-gray-600 text-xl hover:text-blue-600 transition"
            >
              <FaSignInAlt />
            </Link>
          )}
        </div>
      </div>

     
      <div
        className={`sm:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
       
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            <FaTimes />
          </button>
        </div>

        
        <div className="flex flex-col space-y-4 p-4">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `text-gray-700 hover:bg-blue-100 py-2 px-4 rounded transition ${
                  isActive ? "font-bold border-l-4 border-blue-600" : ""
                }`
              }
              onClick={toggleSidebar}
            >
              {route.label}
            </NavLink>
          ))}
        </div>

      
        <div className="p-4 border-t">
          {isLoggedIn ? (
            <div className="flex flex-col space-y-4">
              <Link
                to="/profile"
                className="text-gray-700 hover:bg-blue-100 py-2 px-4 rounded transition"
                onClick={toggleSidebar}
              >
                <FaUser className="inline-block mr-2" /> Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-gray-700 hover:bg-blue-100 py-2 px-4 rounded transition"
              onClick={toggleSidebar}
            >
              Login
            </Link>
          )}
        </div>
      </div>

      
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;


