import { useContext } from 'react'
import  {Outlet, Navigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const PrivateRoutes = () => {
    console.log("private route is working")
    const {email} = useContext(AuthContext)
    const {authTokens} = useContext(AuthContext)

    
    console.log(authTokens)

    console.log(123)

  return (
    // <Navigate to="/userhome" />
    email? <Outlet/> : <Navigate to='/login'/>
    
  )
}

export default PrivateRoutes