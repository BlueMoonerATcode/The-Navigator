import React from 'react';
import './Places.css';


import { useNavigate } from 'react-router-dom';
export default function Places(places) {
  const { image, title} = places;
  const navigate = useNavigate();
  const load="/chargingstations/newpage";

  const handleClick = () => {
    navigate(load);
  }


  return (
    <div className="place">
      <img src={image} alt={title} className="place-image" />
      <h2 className="place-title">{title}</h2>
    
      <button  onClick={handleClick} className="place-button">Explore</button>
    </div>
  );
}
