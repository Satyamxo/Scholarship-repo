import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await axios.post('http://localhost:8000/api/user/login', { email, password }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}` 
        }});

      
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate("/");


      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


      setEmail('');
      setPassword('');

    
      toast.success('Login successful!');
    } catch (error) {
      setLoading(false);
     
      toast.error(error.response?.data?.error || 'Login failed. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>

        
        <div className="relative mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

      
        <div className="relative mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

       
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition ${
            loading ? 'bg-blue-400 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

     
        <div className="text-center mt-4">
          
          <p className="text-gray-600 mt-2">
            Don't have an account?{' '}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
