import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Home from "./pages/Home";
import Login from "./pages/Login";

import HeroSection from "./pages/HeroSection";
import ApprovedApplicant from "./pages/ApprovedApplicant";
import UserPage from "./pages/UserPage";
import LoginForm from "./pages/LoginForm";
import { Header } from "rsuite";
import NavigationBar from "./components/Header";
import PrivateRoutes from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import UserRegister from "./pages/userRegister";

function App() {
  return (
    
    <Router>
      <AuthProvider>
      
      {/* <NavigationBar /> */}
      <Routes>
        
        
        {/* <Route path="/" element={<HeroSection />} /> */}
        
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HeroSection />} />
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
