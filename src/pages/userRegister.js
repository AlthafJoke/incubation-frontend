import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './userRegister.css'



const UserRegister = () => {
  
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone , setPhone] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let registerUser = async (e) => {
    e.preventDefault();
    console.log(1234)
    console.log(e.target.phone.value)
    console.log('signup working')

    try {
        let response = await fetch('http://127.0.0.1:8000/accounts/api/registration/', {
            method:'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body:JSON.stringify({
                'first_name': firstName, 
                'last_name': lastName,
                'email': email,
                'phone_no':phone,
                'password': password

            })
        })
        // .then(() => console.log('form submited'))
        let info = await response.json()
        console.log(info)

        

    }
    catch (error) {
        console.log(error)
        alert('something worng')
    }
    


  }

  return (
    <div id='signup-app'>
        <div className="box">
            <h3>Registration</h3>
      <form className="signup-form" onSubmit={registerUser}>
        <input
          className="form-control mb-2"
          type="text"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
          tabIndex="1"
          name="first_name"
          placeholder="First name"
          required
        />
        <input
        className="form-control mb-2"
          type="text"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
          tabIndex="1"
          name="last_name"
          placeholder="Last name"
          required
        />
        <input
        className="form-control mb-2"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          tabIndex="1"
          name="email"
          placeholder="Email"
          required
        />
        <input
        className="form-control mb-2"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          tabIndex="1"
          name="phone"
          placeholder="phone number"
          required
        />
        <input
        className="form-control mb-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          tabIndex="1"
          placeholder="Password"
          required
        />
        <input
        className="form-control mb-2"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirm_password"
          tabIndex="1"
          placeholder="Confirm Password"
          required
        />

        {/* { errorMessage && <p className='error-message'>{errorMessage}</p>} */}

        <input type="submit" className="btn btn-primary"  />
        <p className="signupNavigation">
          Have an Account? <Link to="/login"><button className="btn btn-success">Login</button> </Link>{" "}
        </p>
      </form>
    </div>
        
    </div>
    
  );
};

export default UserRegister;
