import React from 'react';
import './Info.css';

export default function Info(info) {
  const { title, description, timing,phone,charger_type } = info;
 

  return (
    <div className="product">
      
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-timing">{timing}</p>
      <p className="product-phone">{phone}</p>
      <p className="charger-type">✔{charger_type}</p>
      
    </div>
  );
}