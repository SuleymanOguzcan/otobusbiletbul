// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import InquiryPage from './Pages/InquiryPage';
import TripDetailsPage from './Pages/TripDetailsPage';
import PaymentPage from './Pages/PaymentPage';

const App = () => {
  const [user, setUser] = useState(null);

  
  useEffect(() => {
    const signInInfo = localStorage.getItem('signInInfo');
    if (signInInfo) {
      setUser(JSON.parse(signInInfo));
    }
  }, []);

  
  const handleRegister = (userData) => {
    
    const updatedUserData = { ...userData, firstName: userData.firstName };
    localStorage.setItem('signInInfo', JSON.stringify(updatedUserData));
    
    setUser(updatedUserData);
    window.location.href = '/home';
  };

  
  const handleLogin = (userData) => {
    
    const updatedUserData = { ...userData, firstName: userData.firstName };
    localStorage.setItem('signInInfo', JSON.stringify(updatedUserData));
    
    setUser(updatedUserData);
    window.location.href = '/home';
  };

  
  const handleLogout = () => {
    
    localStorage.removeItem('signInInfo');
   
    setUser(null);
    window.location.href = '/home';
  };

  return (
    <Router>
      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">🚗 Sefer Bul</Link>
            <ul className="navbar-nav ml-auto">
              {!user ? (
                <>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">Kayıt Olun !</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">Giriş Yapın</Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <span className="nav-link">Hoşgeldin, {user.firstName}!</span>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={handleLogout}>
                      Çıkış Yap
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>

        <Routes>
          <Route
            path="/register"
            element={<RegisterPage onRegister={handleRegister} />}
          />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          />
          <Route path="/home" element={<HomePage user={user} onLogout={handleLogout} />} />
          <Route path="/inquiry" element={<InquiryPage />} />
          <Route path="/trip-details" element={<TripDetailsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
