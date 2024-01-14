
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalPrice } = location.state || {};
  const [formData, setFormData] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [registeredUser, setRegisteredUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('registeredUser'));
    setRegisteredUser(user);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.cardNumber && formData.expiryDate && formData.cvv) {
      simulatePayment();
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  const simulatePayment = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setPaymentSuccess(true);
  };

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Ödeme Sayfası</h2>
      {!paymentSuccess && (
        <div>
          <strong style={{ color: 'red' }}>Toplam Ücret: {totalPrice}</strong>
          {registeredUser && (
            <div>
              <p>Yolcu: {registeredUser.firstName} {registeredUser.lastName}</p>
              <p>Cinsiyet: {registeredUser.gender}</p>
              <p>Doğum Tarihi: {registeredUser.birthDate}</p>
              <p>Email: {registeredUser.email}</p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="cardNumber" className="form-label">Kart Numarası:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                className="form-control"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="expiryDate" className="form-label">Son Kullanma Tarihi:</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                className="form-control"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cvv" className="form-label">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                className="form-control"
                value={formData.cvv}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Ödeme Yapılıyor...' : 'Ödemeyi Tamamla'}
            </button>
          </form>
        </div>
      )}
      {paymentSuccess && <p>Ödeme başarıyla tamamlandı!</p>}
      <div className="mt-3">
        <button className="btn btn-success me-2" onClick={handleGoHome} disabled={loading || !paymentSuccess}>
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
