import  {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes = () => {
    console.log("private route is working")
    // const isAuthenticated = true;
    const auth = {'token':true}
      
  
    
  return (
    // <Navigate to="/userhome" />
    auth.token? <Outlet/>: <Navigate to='/loginForm'/>
    
  )
}

export default PrivateRoutes