import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Home from "./pages/Home";
import Login from "./pages/Login";

import HeroSection from "./pages/HeroSection";
import ApprovedApplicant from "./pages/ApprovedApplicant";

import PrivateRoutes from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import UserRegister from "./pages/userRegister";

import Dashboard from "./pages/userDashboard/Dashboard";
import AdminPrivateRoute from "./utils/AdminPrivateRoute";


function App() {
  
  return (
    
    <Router>
      <AuthProvider>
      
      {/* <NavigationBar /> */}
      <Routes>
        
        
        {/* <Route path="/" element={<HeroSection />} /> */}
        
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HeroSection />} />


          <Route index path="/userDashboard" element={<Dashboard/>  } />
          

        </Route>
        
        <Route element={<AdminPrivateRoute/>}>
          <Route index path="/admin" element={<Home />} />
          <Route path="/approved" element={<ApprovedApplicant />} />


        </Route>
          
        
        <Route path="/login" element={<Login />} />
        <Route path="/userRegister" element={<UserRegister/>} />
        
        {/* <Route path="/loginForm" element={<LoginForm />} /> */}
      </Routes>
      </AuthProvider>

      
      
    </Router>
  );
}

export default App;
