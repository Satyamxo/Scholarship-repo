

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as jwt_decode from 'jwt-decode';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Upload from './components/Upload';
import ViewDocumentsPage from './components/View';
import SignUp from './components/Sign';
import { Home } from './pages/Home';
import About from './pages/About';
import SupportPage from './pages/Support';
import SchemePage from './pages/Scheme';
import ProfilePage from './pages/Profile';
import ScholarshipForm from './pages/Apply';
import YourScholarships from './pages/YourScholarships';
import UserRoute from './components/UserRoute';
import { Navigate } from 'react-router-dom';

const App = () => {
 
  
const [user, setUser] = useState(null);
const [checkingAuth, setCheckingAuth] = useState(true); // NEW

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwt_decode.jwtDecode(token);
      setUser(decoded);
    } catch (error) {
      console.error("Invalid token");
      setUser(null);
    }
  }
   setCheckingAuth(false); 
}, []);

 if (checkingAuth) {
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar  setUser={setUser} />
      <main>
        <Routes>
          <Route path="/login" element={<Login setUser = {setUser}/>} />
            <Route path="/signup" element={<SignUp />} />

          <Route element={<UserRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={user ? <Upload userId={user.userId} /> : <Navigate to="/login" />} />
            <Route path="/view/:userId" element={user ? <ViewDocumentsPage userId={user.userId} /> : <Navigate to="/login" />} />
            <Route path="/about" element={<About />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/apply/:scholarshipId" element={user ? <ScholarshipForm userId={user.userId} /> : <Navigate to="/login" />} />
            <Route path="/schemes" element={<SchemePage />} />
            <Route path="/profile" element={user ? <ProfilePage user={user} /> : <Navigate to="/login" />} />
            <Route path="/your-scholarships" element={user ? <YourScholarships userId={user.userId} /> : <Navigate to="/login" />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;

