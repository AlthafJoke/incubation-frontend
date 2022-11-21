import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CookiesProvider} from 'react-cookie'
import Home from './pages/Home';
import Login from './pages/Login';

import HeroSection from './pages/HeroSection';

function App() {
  return (
    <CookiesProvider>
    <Router>
      <Routes>
        <Route  path="/home" element={
          
            <Home />
          
        } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HeroSection />} />

    
      </Routes>
    </Router>
    </CookiesProvider>
  );
}

export default App;
