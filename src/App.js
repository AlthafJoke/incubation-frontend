import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CookiesProvider} from 'react-cookie'
import Home from './pages/Home';
import Login from './pages/Login';

import HeroSection from './pages/HeroSection';
import ApprovedApplicant from './pages/ApprovedApplicant';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route  path="/home" element={
          
            <Home />
          
        } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/approved" element={<ApprovedApplicant/>} />


    
      </Routes>
    </Router>
    
  );
}

export default App;
