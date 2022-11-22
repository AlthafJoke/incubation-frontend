import React from 'react'
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
        <Link to='/userhome'>Home</Link>
        <span>   |   </span>
        <Link to='/loginForm'>Login</Link>

    </div>
  )
}

export default NavigationBar