import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10">
            <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">About SAKSHAM</h2>
                        <p className="text-gray-400">
                            SAKSHAM is a platform designed to simplify the scholarship application
                            process, empowering students to achieve their academic goals with ease.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="hover:text-blue-500 transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#scholarships" className="hover:text-blue-500 transition">
                                    Scholarships
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-blue-500 transition">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="hover:text-blue-500 transition">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500" />
                                123 Scholarship Lane, Knowledge City, India
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt className="text-blue-500" />
                                +91 98765 43210
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-blue-500" />
                                support@saksham.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
                    {/* Social Media Links */}
                    <div className="flex gap-4 mb-4 md:mb-0">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} SAKSHAM. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
