import React, { useState, useEffect, useContext } from "react";

import { Form } from "rsuite";
import AuthContext from "../context/AuthContext";
import "./LoginForm.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginUser, isLogin, setLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  return (
    <div>
      <div className="w-full h-screen ">
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-red-700 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              {/* {isLogin ? (
                <h1 className="text-3xl font-bold ">Sign In</h1>
              ) : (
                <h1 className="text-3xl font-bold ">Register Here</h1>
              )} */}
              <Form onSubmit={() => loginUser({ email, password })}>
                <input
                  className="p-3 my-2 form-control"
                  id="username"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 form-control "
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="bg-green-600 py-3 my-6 rounded btn-lg btn-block w-full"
                  type="submit"
                >
                  Sign In
                </button>
              </Form>
              <p>
                if you dont have account please <button className='btn btn-primary shadow' onClick={() => {navigate('/userRegister')}} >Register</button></p>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useContext, useState } from "react";
// // import { Link } from "react-router-dom";
// import { Form } from "rsuite";
// import AuthContext from "../context/AuthContext";
// import "./LoginForm.css";

// const Login = () => {
//   const { loginUser } = useContext(AuthContext);
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setLogin] = useState(true); // this one is used for logout state

//   return (
//     <div>
//       <div className="w-full h-screen ">
//         //{" "}
//         <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
//         //{" "}
//         <div className="fixed w-full px-4 py-24 z-50 ">
//           //{" "}
//           <div className="max-w-[450px] h-[600px] mx-auto bg-red-700 text-white">
//             //{" "}
//             <div className="max-w-[320px] mx-auto py-16">
//               //{" "}
//               {isLogin ? (
//                 <h1 className="text-3xl font-bold ">Sign In</h1>
//               ) : (
//                 <h1 className="text-3xl font-bold ">Register Here</h1>
//               )}
//               <Form onSubmit={()=>{loginUser({name,password})}}>
//                 //{" "}
//                 <input
//                   className="p-3 my-2 form-control"
//                   id="username"
//                   type="text"
//                   placeholder="Username"
//                   value={name}
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                 />
//                 <input
//                   className="p-3 my-2 form-control "
//                   type="password"
//                   id="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => {
//                     setPassword(e.target.value);
//                   }}
//                 />
//                 {/* <button className='bg-green-600 py-3 my-6 rounded btn-lg btn-block w-full' onClick={loginBtn} >Sign In</button> */}
//                 {isLogin ? (
//                   <input
//                     className="bg-green-600 py-3 my-6 rounded btn-lg btn-block w-full"
//                     type="submit"
//                   >
//                     Sign In
//                   </input>
//                 ) : (
//                   <button className="bg-primary py-3 my-6 rounded btn-lg btn-block w-full">
//                     Register
//                   </button>
//                 )}
//                 {/* {isLogin ? <p>
//                 if you dont have account please <button className='btn btn-primary shadow' onClick={() => setLogin(false)}>Register</button></p>: <p>
//                 if you have account please <button className='btn btn-success shadow' onClick={() => setLogin(true)}>Login</button></p>} */}
//               </Form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
