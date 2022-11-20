import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CookiesProvider} from 'react-cookie'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <CookiesProvider>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
    
      </Routes>
    </Router>
    </CookiesProvider>
  );
}

export default App;
