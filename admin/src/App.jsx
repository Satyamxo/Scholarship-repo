import React from 'react'
import {  Route , Routes } from 'react-router-dom'
import LoginPage from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Delete from './pages/Delete.jsx';
import ScholarshipManagement from './pages/Status.jsx';
import ViewDocumentsPage from './pages/ViewDocuments.jsx';
import AdminRoute from './components/AdminRoute.jsx';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />


        <Route element={<AdminRoute/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/delete' element={<Delete/>} />
        <Route path='/manage' element={<ScholarshipManagement/>} />
        <Route path="/view/:userId" element={<ViewDocumentsPage   />} />
        </Route>


      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
