// RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password && firstName && lastName && gender && birthDate) {
      const registeredUser = {
        email,
        firstName,
        lastName,
        gender,
        birthDate,
      };

      onRegister(registeredUser);

      navigate('/login');
    } else {
      setError('Lütfen tüm bilgileri eksiksiz girin');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card" style={{ background: 'linear-gradient(to right, #007BFF, #00BFFF)' }}>
            <div className="card-header">
              <h2>Kayıt Sayfası</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">email:</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">sifre:</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">adı:</label>
                <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">soyadı:</label>
                <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">cinsiyet:</label>
                <select className="form-control" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="">cinsiyet</option>
                  <option value="male">erkek</option>
                  <option value="female">kadın</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="birthDate" className="form-label">Doğum tarih:</label>
                <input type="date" className="form-control" id="birthDate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
              </div>
              <button type="button" className="btn btn-success" onClick={handleRegister}>Kaydol</button>
              {error && <p className="text-danger mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
