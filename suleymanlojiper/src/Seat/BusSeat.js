// src/Seat/BusSeat.js

import React, { useState } from 'react';
import '../Seat/Bus.css';  

const BusSeat = ({ number, onSelect, gender }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSeatClick = () => {
    
    if (isSelected) {
      return;
    }

    
    setIsSelected(true);

    // Koltuğun fiyatını belirle rastgele)
    // const seatPrice = Math.random() < 0.5 ? 30 : 40;

    //sabit 50 lira
    const seatPrice = 50;

    
    onSelect(number, seatPrice, gender);
  };

  return (
    <div className={`seat ${isSelected ? 'selected' : ''} ${gender}`} onClick={handleSeatClick}>
      <label>{number}</label>
    </div>
  );
};

export default BusSeat;
