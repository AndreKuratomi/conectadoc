import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Schedules from "../pages/Schedules";
import MedicalRecord from "../pages/MedicalRecord";
import NotFound from "../pages/NotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/schedules" element={<Schedules />} />
      <Route path="/medicalrecord" element={<MedicalRecord />} />
      <Route element={<NotFound />} />
    </Routes>
  );
};
