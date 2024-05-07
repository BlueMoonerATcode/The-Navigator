import React from 'react';
import Info from '../info/Info';
import './Infopage.css';

const info = [
    {
      id: 1,
      title:'Tata Power Charging Station', 
      description:'3766, Samantarapur, Old Town, Bhubaneswar, Odisha 751002', 
      timing:'Open 24 X 7',
      phone:'1800 209 5161',
      charger_type:'CHAdeMO',
      
    },
    {
      id: 2,
      title:'Ather Grid Charging Station', 
      description:'Plot no-516, The Big Bike Hub Cafe, KIIT Rd, opposite Big Bazar, Patia, Bhubaneswar, Odisha 751024', 
      timing:'08:00 AM - 09:00 PM',
      phone:'076766 00900',
      charger_type:'DC, GBT',
      
     
      
    },
    {
      id: 3,
      title:'Tata Power Charging Station 2', 
      description:'8RQ2+R77, Infosys Ave, Infocity, Chandrasekharpur, Bhubaneswar, Odisha 751024', 
      timing:'10:00 AM - 07:00 PM',
      phone:'9642841000',
      charger_type:'IEC 60309, AC TYPE 1'
    },
    
    {
      id: 4,
      title:'Statiq Charging Station', 
      description:'7VR4+HCR, Esplanade One Ln, Rasulgarh Industrial Estate, Industrial Area Estate, Rasulgarh, Bhubaneswar, Odisha 751007', 
      timing:'09:00 AM - 08:00 PM',
      phone:'9642841000',
      charger_type:'IEC 60309, AC TYPE 1',
      
    },
    {
      id: 5,
      title:'OLA Hyper Charger', 
      description:'7R4R+X9, BJB Nagar, Bhubaneswar, Odisha 751014', 
      timing:'09:00 AM - 11:00 PM',
      phone:'9711181070',
      charger_type:'DC, GBT',
      
     
      
    },
    {
      id: 6,
      title:'Vidyutva', 
      description:'735, Esplanade One Ln, Rasulgarh Industrial Estate, Industrial Area Estate, Rasulgarh, Bhubaneswar, Odisha 751010', 
      timing:'10:00 AM - 07:00 PM',
      phone:'095995 34149',
      charger_type:'IEC 60309, AC TYPE 1'
    },
    
   
   
  ];
  export default function Infopage() {
    return (
      <div className="info">
        {info.map((newinfo) => (
          <Info
            key={newinfo.id}
            
            title={newinfo.title}
            description={newinfo.description}
            timing={newinfo.timing}
            phone={newinfo.phone}
            charger_type={newinfo.charger_type}
            
           
          />
          
        ))}
      </div>
    );
  }
  
  