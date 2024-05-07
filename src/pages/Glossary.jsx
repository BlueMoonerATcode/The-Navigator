// import Content from "../components/Glossary_Content/Content";

// export default function Glossary() {
//   return <Content/>;
// }

import React, { useState } from 'react';
import './GlossaryPage.css'; // Import CSS file for styling

// Define an array of terms and their corresponding definitions
const glossaryData = [
  {
    term: 'Electric Vehicle (EV)',
    definition: 'A vehicle that operates using one or more electric motors, powered by rechargeable batteries or another energy storage device.'
  },
  
  {
    term: 'Charging Station',
    definition: 'A facility equipped with electric chargers for recharging electric vehicles.'
  },

  {
    term: 'Level 1 Charging',
    definition: 'Charging an electric vehicle using a standard 120-volt AC electrical outlet. Typically provides a slower charging rate.'
  },

  {
    term: 'Level 2 Charging',
    definition: 'Charging an electric vehicle using a 240-volt AC electrical outlet or dedicated charging equipment. Offers a faster charging rate compared to Level 1 charging.'
  },

  {
    term: 'DC Fast Charging',
    definition: 'A high-powered charging method that delivers direct current (DC) electricity to an electric vehicle\'s battery, enabling rapid charging.'
  },

  {
    term: 'Plug Type',
    definition: 'The physical connector used to connect an electric vehicle to a charging station. Common types include Type 1, Type 2, CHAdeMO, CCS, and Tesla Supercharger.'
  },  

  {
    term: 'Charging Network',
    definition: 'A group of charging stations operated by the same entity or network provider, often accessible through a unified platform or membership.'
  },

  {
    term: 'RFID Card',
    definition: 'Radio-frequency identification (RFID) card used for authentication and access control at charging stations, often provided by charging network operators.'
  },

  {
    term: 'kWh Cost',
    definition: 'The cost of electricity per kilowatt-hour consumed during charging, typically measured in local currency units.'
  },

  {
    term: 'Range Anxiety',
    definition: 'A psychological concern or fear among electric vehicle drivers about the limited range of their vehicle and the availability of charging stations for longer journeys.'
  },

  {
    term: 'EVSE (Electric Vehicle Supply Equipment)',
    definition: 'Equipment or device that delivers electric energy from an electricity source to an electric vehicle, such as charging stations, connectors, cables, and other necessary infrastructure.'
  },
  
  
  // Other glossary terms...
];

// Define a GlossaryPage component to render the terms and definitions
const Glossary = () => {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleClick = (term) => {
    if (term === selectedTerm) {
      // Deselect the term if it's already selected
      setSelectedTerm(null);
    } else {
      // Otherwise, select the clicked term
      setSelectedTerm(term);
    }
  };

  return (
    <div className='black_corners'>
      <div className="glossary-page">
        <h1 className="glossary-title"></h1>
        <div className="glossary-list">
          {glossaryData.map((item, index) => (
            <div key={index} className="glossary-item">
              <h2 className="term" onClick={() => handleClick(item.term)}>
                {item.term}
              </h2>
              {selectedTerm === item.term && (
                <p className="definition">{item.definition}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glossary;