import React, {useState, useEffect} from 'react'
import APIService from '../components/APIService'
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['my-token'])
    const [isLogin ,setLogin] = useState(true) // this one is used for logout state
    const navigate = useNavigate();


    useEffect(() => {
      if(token['my-token']) {
        navigate('/home')
      }
    })

    const loginBtn = () => {
      APIService.LoginUser({username, password})
      .then(response => setToken('my-token',response.token))
      .catch(error => console.log(error))

    }
  return (
    <div>
        
        <div className='w-full h-screen '>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50 '>
          <div className='max-w-[450px] h-[600px] mx-auto bg-red-700 text-white' >
            <div className='max-w-[320px] mx-auto py-16'>
                {/* {isLogin ? <h1 className='text-3xl font-bold '>Sign In</h1> : <h1 className='text-3xl font-bold '>Register</h1>} */}
              
              
              
              <input
                
                className='p-3 my-2 form-control' id="username" type="text"  placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
               <input
               
                className='p-3 my-2 form-control ' type="password" id="password"  placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                {/* <button className='bg-green-600 py-3 my-6 rounded btn-lg btn-block w-full' onClick={loginBtn} >Sign In</button> */}
                {isLogin ? <button className='bg-green-600 py-3 my-6 rounded btn-lg btn-block w-full' onClick={loginBtn}>Sign In</button>:
                 <button className='bg-primary py-3 my-6 rounded btn-lg btn-block w-full' >Register</button>}
               
               
               {isLogin ? <p>
                if you dont have account please <button className='btn btn-primary shadow' onClick={() => setLogin(false)}>Register</button></p>: <p>
                if you have account please <button className='btn btn-success shadow' onClick={() => setLogin(true)}>Login</button></p>}

                
              
                
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Login