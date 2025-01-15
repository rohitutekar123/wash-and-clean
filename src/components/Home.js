import React from 'react';
import './Home.css';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="highlight">Best Wash and Iron service</span>
            <br />
            in your doorstep...
          </h1>
          <p>
            LaundryWala is an Online Laundry Platform that uses the latest technology in washing, dry cleaning, and laundry. 
            Our services combine user expertise and maximum support over a period of time to provide you with clean laundry in 
            the shortest possible turnaround time.
          </p>
          <button className="view-services-btn">View Services</button>
        </div>
        <div className="hero-image">
          <img src="/images/laundry-service.png" alt="Laundry Service" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
