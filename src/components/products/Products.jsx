import React from 'react';
import Product from '../product/Product';
import './Products.css';
import cybertruckImage from '../../assets/cybertruck.jpg';
import modelSImage from '../../assets/model-s.jpg';
import modelXImage from '../../assets/model-x.jpg';
import teslaCharger from '../../assets/tesla-charger.jpg';
import BMW from '../../assets/BMW.jpg';
import kiacar from '../../assets/kiacar.jpg';


const products = [
  {
    id: 1,
    image: cybertruckImage,
    title: 'Hyundai Ioniq 5 N',
    description: 'Discover the IONIQ 5 N, a high-performance EV with 478 kW / 650 PS to propel you from 0-62 mph in 3.4 seconds',
    price: '₹ 45.95 Lakh',
  },
  {
    id: 2,
    image: modelSImage,
    title: 'Tata Punch',
    description: 'Presenting Tata PUNCH, the no-compromise SUV. The epitome of class that offers a blend of sporty dynamics and tough utility.',
    price: '₹ 10.20 Lakh',
  },
  {
    id: 3,
    image: modelXImage,
    title: 'Volkswagen ID.7',
    description: 'In many ways the ID.7 has absolutely nailed the brief. The space, comfort, range and efficiency are impressive.',
    price: '₹ 80.00 Lakh'  ,
  },
  {
    id: 4,
    image: teslaCharger,
    title: 'Charger',
    description: 'Modular power configuration for redundancy and easy serviceability. Car battery charger made from ABS flame retardant materials, high temperature resistance and corrosion resistance.',
    price:'₹ 30,000',
  },
  {
    id: 5,
    image: BMW,
    title: 'BMW i4',
    description: 'We like the Tesla Model 3 and Polestar 2, but theres still a vacancy for a really sweet-driving alternative. The i4 is that alternative. In eDrive40 guise it rides very well and handles more deftly than any other comparative EV.',
    price: '₹ 72.50 Lakh',
  },
  {
    id: 6,
    image: kiacar,
    title: 'Kia EV9',
    description: 'Kia’s flagship product feels like a worthy range-topper not simply because it offers a lot of metal, chair and equipment for the money.',
    price: '₹ 90.00. Lakh',
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
