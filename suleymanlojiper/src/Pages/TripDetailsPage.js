import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BusSeat from '../Seat/BusSeat';
import '../Seat/Bus.css';

const TripDetailsPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const MAX_SELECTED_SEATS = 5;

  const handleSeatSelect = (seatNumber, seatPrice, seatGender) => {
    
    if (
      selectedSeats.length < MAX_SELECTED_SEATS &&
      !selectedSeats.some((seat) => seat.gender !== seatGender)
    ) {
      setSelectedSeats((prevSeats) => [
        ...prevSeats,
        { number: seatNumber, price: seatPrice, gender: seatGender },
      ]);
      setTotalPrice((prevPrice) => prevPrice + seatPrice);
    } else {
      
      console.log("Seat selection not allowed. Check rules.");
    }
  };

  const handleContinue = () => {
    if (selectedSeats.length > 0 && totalPrice > 0) {
      navigate('/payment', { state: { selectedSeats, totalPrice } });
    } else {
      console.log("Select at least one seat and calculate the total price.");
    }
  };

  return (
    <div>
      <h2>Sefer Detayları</h2>
      <div className="bus">
        <div className="seat-row">
          {[1, 2, 3, 4].map((seatNumber) => (
            <BusSeat
              key={seatNumber}
              number={seatNumber}
              onSelect={handleSeatSelect}
              gender="male"
            />
          ))}
        </div>
        <div className="seat-row">
          {[5, 6, 7, 8].map((seatNumber) => (
            <BusSeat
              key={seatNumber}
              number={seatNumber}
              onSelect={handleSeatSelect}
              gender="female"
            />
          ))}
        </div>
      </div>

      <div>
        <h3>Seçilen Koltuklar</h3>
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={index}>{`Koltuk ${seat.number} - ${
              seat.gender === 'male' ? 'Erkek' : 'Kadın'
            }`}</li>
          ))}
        </ul>
        <p>Toplam Ücret: {totalPrice}</p>
      </div>

      <button onClick={handleContinue}>Devam</button>
    </div>
  );
};

export default TripDetailsPage;
