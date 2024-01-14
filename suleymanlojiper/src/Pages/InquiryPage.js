
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import seferlerData from '../data/seferler.json';

const InquiryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { kalkis, varis, seferTarihi } = location.state || {};

  // JSON dosyası
  const seferler = seferlerData;

  const filteredSeferler = seferler.filter(sefer => 
    sefer.kalkisYeri === kalkis && 
    sefer.varisYeri === varis && 
    sefer.tarih === seferTarihi
  );

  const SeferListesi = () => {
    if (filteredSeferler.length === 0) {
      return <strong style={{ color: 'red' }}>UYGUN SEFER BULUNAMADI</strong>;
    }

    return (
      <div>
        <h3><strong>Toplam Sefer Sayısı:</strong> {filteredSeferler.length}</h3>
        <p><strong>Uygun Seferler:</strong></p>
        
        {filteredSeferler.map(sefer => (
          <div key={sefer.id} className="card mb-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <p><strong>Kalkış Yeri:</strong> {sefer.kalkisYeri}</p>
                </div>
                <div className="col-md-3">
                  <p><strong>Varış Yeri:</strong> {sefer.varisYeri}</p>
                </div>
                <div className="col-md-3">
                  <p><strong>Tarih:</strong> {sefer.tarih}</p>
                </div>
                <div className="col-md-3">
                  <p><strong>Boş Koltuk Sayısı:</strong> {sefer.bosKoltuk}</p>
                  <p><strong>Fiyatı:</strong> {sefer.fiyat}</p>
                  <button onClick={() => navigate(`/trip-details/`)} className="btn btn-primary">Detaylar</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2>Seyahat Sorgu Sonuçları - {kalkis} ➔ {varis}</h2>
            </div>
            <div className="card-body">
              <p>Kalkış Yeri: {kalkis}</p>
              <p>Varış Yeri: {varis}</p>
              <p>Sefer Tarihi: {seferTarihi}</p>
              <SeferListesi />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
