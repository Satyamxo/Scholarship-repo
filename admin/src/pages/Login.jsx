import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify';

const LoginPage = () => {

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordlValue] = useState("")
    const navigate = useNavigate()

    const onSubmitHandler = async (e) => {

        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8000/api/admin/login", { email: emailValue, password: passwordValue },{headers: {
                    Authorization: `Bearer ${localStorage.getItem('adminToken')}`,
                  }})
            console.log(response)
            if (response.data.success) {
                localStorage.setItem("adminToken", response.data.token)
                toast.success("Login successfully")
                navigate("/")
             setEmailValue("")
            setPasswordlValue("")
        }
            else{
                toast.error("Something is wrong")
            }
           

        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || "Something went wrong. Please try again.");
        }

    }




    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg space-y-6">
                <h2 className="text-3xl font-bold text-center text-indigo-600">Admin Login</h2>

                <form className="space-y-6" onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 mt-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={passwordValue}
                            onChange={(e) => setPasswordlValue(e.target.value)}
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-2 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="form-checkbox text-indigo-600" />
                            <span className="ml-2">Remember me</span>
                        </label>

                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                        Login
                    </button>
                </form>


            </div>
        </div>
    );
};

export default LoginPage;
