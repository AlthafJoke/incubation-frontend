import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthContext'


const AdminPrivateRoute = () => {
    console.log("private route is working")
    const {email} = useContext(AuthContext)
    const {authTokens} = useContext(AuthContext)
    console.log(email.admin)
    

    
    
  return (
    <div>
        {email.admin?  <Outlet/>  : <Navigate to='/login'/>}

    </div>
  )
}

export default AdminPrivateRoute