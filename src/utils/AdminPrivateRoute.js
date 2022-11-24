import React, { useContext, useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const AdminPrivateRoute = () => {
    console.log(" admin private route is working")
    const {email} = useContext(AuthContext)
    const {authTokens} = useContext(AuthContext)
    

    
    

    
    
  return (
    
      email.admin?<Outlet/>: <Navigate to='/login'/>
      


    
  )
}

export default AdminPrivateRoute