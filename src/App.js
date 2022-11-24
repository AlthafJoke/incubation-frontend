import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Home from "./pages/admin/Home";
import Login from "./pages/Login";

import HeroSection from "./pages/user/user-home/HeroSection";
import ApprovedApplicant from "./pages/user/application-form/ApprovedApplicant";

import PrivateRoutes from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import UserRegister from "./pages/user-register/userRegister";

import Dashboard from "./pages/user/userDashboard/Dashboard";
import AdminPrivateRoute from "./utils/AdminPrivateRoute";
import SlotBooking from "./pages/admin/slot-booking/SlotBooking";
import BookedApplicant from "./pages/admin/booked-applicant/BookedApplicant";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<HeroSection />} />

            <Route path="/userDashboard" element={<Dashboard />} />
          </Route>

          <Route element={<AdminPrivateRoute />}>
            <Route path="/admin" element={<Home />} />
            <Route path="/approved" element={<ApprovedApplicant />} />
            <Route path="/slot" element={<SlotBooking />} />
            <Route path="/booked-applicant" element={<BookedApplicant />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/userRegister" element={<UserRegister />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
