import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Schedules from "../pages/Schedules";
import MedicalPrompt from "../pages/MedicalPrompt";
import NotFound from "../pages/NotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/schedules" element={<Schedules />} />
      <Route path="/medicalprompt" element={<MedicalPrompt />} />
      <Route element={<NotFound />} />
    </Routes>
  );
};
