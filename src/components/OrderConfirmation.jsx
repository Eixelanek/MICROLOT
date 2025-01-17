import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [currentNumber, setCurrentNumber] = useState('');
  const MAX_ORDER_NUMBER = 9999;

  useEffect(() => {
    const handleOrderNumber = () => {
      const currentTimestamp = new Date().getTime();
      const lastUpdateTimestamp = localStorage.getItem('lastUpdateTimestamp');

      if (!lastUpdateTimestamp || currentTimestamp - parseInt(lastUpdateTimestamp) > 1000) {
        const lastNumber = parseInt(localStorage.getItem('orderNumber')) || 0;
        const newNumber = lastNumber >= MAX_ORDER_NUMBER ? 1 : lastNumber + 1;
        
        localStorage.setItem('orderNumber', newNumber.toString());
        localStorage.setItem('lastUpdateTimestamp', currentTimestamp.toString());
        
        setCurrentNumber(newNumber.toString().padStart(4, '0'));
      }
    };

    handleOrderNumber();

    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <div className="logo-section">
          <img src={logo} alt="Microlot Logo" className="logo" />
          <h1 className="brand-name2">MICROLOT</h1>
        </div>
        
        <div className="horizontal-line" />
        
        <div className="order-number">
          {currentNumber}
        </div>
        
        <div className="horizontal-line" />
        
        <div className="counter-instruction">
          Please show this at the counter
        </div>
        
        <div className="timestamp">
          <div>{formatDate(new Date())}</div>
          <div>{formatTime(new Date())}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;