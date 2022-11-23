import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext, { AuthProvider } from "../context/AuthContext";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const {user} = useContext(AuthContext)
  const {authTokens} = useContext(AuthContext)


  
  console.log(123)
  console.log(authTokens)
  console.log(user)

  return <div>{user && <h1>hi : {user.username}</h1>}</div>;
};

export default UserPage;
