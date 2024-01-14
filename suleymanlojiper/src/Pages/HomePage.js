

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = ({ user, onLogout }) => {
  const [kalkis, setKalkis] = useState('');
  const [varis, setVaris] = useState('');
  const [seferTarihi, setSeferTarihi] = useState('');
  const navigate = useNavigate();

  const handleAra = () => {
    if (kalkis && varis && seferTarihi) {
      navigate('/inquiry', {
        state: {
          kalkis,
          varis,
          seferTarihi,
        },
      });
    } else {
      alert('Lütfen tüm bilgileri seçin');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h2>Anasayfa</h2>
            </div>
            <div className="card-body">
              
              <div className="mb-3">
                <label htmlFor="kalkis" className="form-label">Kalkış Yeri:</label>
                <select className="form-control" id="kalkis" value={kalkis} onChange={(e) => setKalkis(e.target.value)}>
                  <option value="">Seçiniz</option>
                  <option value="Istanbul">İstanbul</option>
                  <option value="Eskisehir">Bursa</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="varis" className="form-label">Varış Yeri:</label>
                <select className="form-control" id="varis" value={varis} onChange={(e) => setVaris(e.target.value)}>
                  <option value="">Seçiniz</option>
                  <option value="Ankara">İstanbul</option>
                  <option value="Bursa">Bursa</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="seferTarihi" className="form-label">Sefer Tarihi:</label>
                <input type="date" className="form-control" id="seferTarihi" value={seferTarihi} onChange={(e) => setSeferTarihi(e.target.value)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleAra}>Sefer Bul</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
