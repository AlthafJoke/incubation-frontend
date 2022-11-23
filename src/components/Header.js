import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const NavigationBar = () => {
  let {user, logoutUser} = useContext(AuthContext)
  
  return (
    <div>
        <Link to='/userpage'>Home</Link>
        <span>   |   </span>
        {user ? (
          <p onClick={logoutUser}>Logout</p>
        ):(
          <Link to='/login'>Login</Link>
        )
        }
        
        {user && <h1>hello : {user.username}</h1>}
        

    </div>
  )
}

export default NavigationBar