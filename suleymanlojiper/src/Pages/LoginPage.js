
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = ({ onLogin, registeredUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    
    const isValidUser = registeredUser && email === registeredUser.email && password === '123';

    if (isValidUser) {
      onLogin(registeredUser);
      navigate('/home');
    } else {
      setError('Geçersiz e-posta veya şifre. Lütfen kontrol edip tekrar deneyin.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ background: 'linear-gradient(to right, #009BFF, #00BFFF)' }}>
            <div className="card-header">
              <h2>Giriş Sayfası</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="text" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Şifre:</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="button" className="btn btn-success" onClick={handleLogin}>Giriş</button>
              {error && <p className="text-danger mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
