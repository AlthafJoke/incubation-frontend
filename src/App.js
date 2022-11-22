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
import PrivateRoutes  from "./utils/PrivateRoute";


function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>

        {/* 
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HeroSection />} /> */}

        <Route element={<PrivateRoutes/>}>
          <Route path='/userhome' element={<UserPage/>}/>
          <Route path="/home" element={<Home />} />
        </Route>
        
        
        <Route path='/loginForm' element={<LoginForm/>} />
        {/* <Route path="/approved" element={<ApprovedApplicant />} > */}
         
        
      </Routes>
    </Router>
  );
}

export default App;
