import React, { useState, useEffect } from 'react';
import './Offer.css';

const Offer = ({ endDate }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(endDate);
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setRemainingTime({ days, hours, minutes, seconds });
      } else {
        
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(calculateTime, 1000); 
    return () => clearInterval(intervalId); 

  }, [endDate]); 

  const { days, hours, minutes, seconds } = remainingTime;

  const formattedTime = `${days ? `${days}d ` : ''}${hours ? `${hours.toString().padStart(2, '0')}h ` : '00h '}
  ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;

  return (
    <div className="offer-container">
      <h2>Limited Time Offer!</h2>
      <p>Don't miss out, this offer ends in: {formattedTime}</p>
    </div>
  );
};

export default Offer;
