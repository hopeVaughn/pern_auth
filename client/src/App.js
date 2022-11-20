import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
//components
import { Dashboard, Login, Register } from "./components";
toast.configure()
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // checks jwt to see if current user is still validated.
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);


  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/login" element={!isAuthenticated ? (
            <Login setAuth={setAuth} />) : (<Navigate to="/dashboard" />)} />
          <Route exact path="/register" element={!isAuthenticated ? (<Register setAuth={setAuth} />) :
            (<Navigate to="/dashboard" />)} />
          <Route exact path="/dashboard" element={isAuthenticated ? (
            <Dashboard setAuth={setAuth} />) : (<Navigate to="/login" />)} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
