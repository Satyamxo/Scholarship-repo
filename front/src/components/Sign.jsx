import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
   
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        
        const url = 'https://scholarships-back.onrender.com/api/user/register';

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
              
                setFormData({ name: "", email: "", phone: "", password: "" });
                navigate("/login")
                toast.success("Register Successfully")
            } else {
                toast.error(" Already egister please ogin ")
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Create Your Account 🚀
                </h2>

                

                <form onSubmit={handleSubmit} className="space-y-4">
               
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Full Name"
                            required
                        />
                    </div>

                  
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter Phone Number"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                {/* Already have an account? */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-700">
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/login")}
                            className="text-blue-500 hover:underline font-medium"
                        >
                            Log in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
