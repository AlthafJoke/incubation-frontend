import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Form } from 'rsuite'
import AuthContext from '../context/AuthContext'
import './LoginForm.css'



const LoginForm = () => {
    const {loginUser} = useContext(AuthContext);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
    <div >
        <Form onSubmit={()=>loginUser({email,password})}>
            <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter email'  />
            <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' />
            <input type="submit" />
        </Form>
        {/* <div id='login-app'>
          <div className='box login'>
            <form className='form' onSubmit={loginUser}>
              <input type="text" tabIndex="1" name='username' placeholder="Username" />
              <input type="password" name='password' tabIndex="1" placeholder="Password"/>
              {errorMessage && <p className='error-message'>{errorMessage}</p>}
              {successMessage && <p className='success-message'>{successMessage}</p>}
              <input type="submit" className="btn btn-login" value="Login" />
              <p className='signupNavigation'>Don't have an account? <Link to='/signup'>Signup</Link> </p>
            </form>
          </div>
        </div> */}
    </div>
  )
}

export default LoginForm