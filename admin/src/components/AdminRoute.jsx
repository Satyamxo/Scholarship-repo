import React from 'react'
import {jwtDecode} from 'jwt-decode';
import { Navigate , Outlet } from 'react-router-dom';

const AdminRoute = () => {

    const adminToken = localStorage.getItem('adminToken')
    
    const email = import.meta.env.VITE_ADMIN_EMAIL;
    console.log(email)

    if (!adminToken) {
        return <Navigate to="/login" />
    }

    try {
        const decode= jwtDecode(adminToken)
        if (decode.adminEmail !== email) {
         return <Navigate to="/login" />
        }
        
    } catch (error) {
        console.log(error)
        return <Navigate to="/login" />
    }


    return <Outlet />;
    
 
}

export default AdminRoute
