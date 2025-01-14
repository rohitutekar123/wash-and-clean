import React from 'react';
import './Service.css';

const servicesData = [
  {
    title: "Wash & Iron",
    description: "All your regular wear garments will be ironed and neatly packed for delivery.",
    image: "/images/wash-iron.jpg",
  },
  {
    title: "Wash & Fold",
    description: "Let us do your chores! We'll carefully wash and fold your clothes.",
    image: "/images/wash-fold.jpg",
  },
  {
    title: "Iron & Fold",
    description: "Get back your dry clothes, neatly ironed and folded.",
    image: "/images/iron-fold.jpg",
  },
  {
    title: "Dry Cleaning",
    description: "All your sensitive and special garments will be individually treated for any stains.",
    image: "/images/dry-cleaning.jpg",
  },
  {
    title: "Emergency Service",
    description: "You can use our emergency service to get your laundry done in record time.",
    image: "/images/emergency-service.jpg",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-button">Select Service</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
