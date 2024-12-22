import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import AddCar from "./components/AddCar";
import './App.css';  // นำเข้า CSS

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-car" element={<AddCar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;