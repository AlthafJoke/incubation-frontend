import React, {createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const AuthContext = createContext()
export default AuthContext





export const AuthProvider = ({children}) => {
    // const localUser = JSON.parse(window.localStorage.getItem('authToken')) || null;
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')): null)

    const [email, setEmail] =  useState(()=> localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null)

    const [loading, setLoading] = useState(true)

    
    
    const navigate = useNavigate()

    

    let loginUser = async (data) => {
        
        
        console.log('login submit working')
        console.log(data);

        
        // console.log(data);

        let response = await fetch('http://127.0.0.1:8000/accounts/api/token/', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({'email': data.email, 'password': data.password})
        })
        // .then(() => console.log('form submited'))
        let info = await response.json()
        console.log(info)

        
        if (response.status == 200) {
            setAuthTokens(info)
            setEmail(jwt_decode(info.access))
            localStorage.setItem('authToken', JSON.stringify(info))
            if(jwt_decode(info.access).admin){
                console.log('admin is working');
                navigate('/admin')
            }
            else{
                navigate('/')
                console.log('not admin')
                
            }
            
            
            
        }
        else{
            alert('something went wrong here')
        }
        
        
    }
    


    const updateToken = async () => {
        console.log('update token called')
        let response = await fetch('http://127.0.0.1:8000/accounts/api/token/refresh/', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({'refresh': authTokens?.refresh})
        })
        let info = await response.json()
        if (response.status === 200){
            setAuthTokens(info)
            setEmail(jwt_decode(info.access))
            localStorage.setItem('authToken', JSON.stringify(info))
           

        }
        else{
            loginUser()

        }
        if(loading){
            setLoading(false)
        }
    }

    const logoutUser = () => {
        // setAuthTokens(null)
        // setEmail(null)
        // localStorage.removeItem('authToken')
        // navigate('/login')
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                setAuthTokens(null)
                setEmail(null)
                localStorage.removeItem('authToken')
                navigate('/login')
              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              
            }
          })


    }

    useEffect(() => {
        if(loading){
            updateToken()
        }

        let fourMinute = 1000 * 60 * 4
        const interval = setInterval(() => {
            if(authTokens){
                updateToken()
            }
        }, fourMinute)
        return () => clearInterval(interval)
    }, [authTokens, loading ])



    const contextData = {
        email:email,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
        
        
        


    }
    
    return (
        <AuthContext.Provider value={contextData}>
            {loading? null : children}
        </AuthContext.Provider>
    )
}