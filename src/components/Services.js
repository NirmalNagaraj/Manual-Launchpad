import React from 'react';
import './Service.css';
import appDevImage from '../assets/appdevelopment.jpg';
import webDevImage from '../assets/webdevelopment.png'; 
import digitalMarketingImage from '../assets/digitalmarketing.png'; 
import graphic from '../assets/graphicdesigning.jpg';
import training from '../assets/trainingprogram.jpg';
import internship from '../assets/internshipprogram.jpg';
import whyus from '../assets/whyus.jpg';

const Service = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services">
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <Service
            image={appDevImage}
            title="App Development"
            description="Crafting user-friendly mobile applications tailored to your needs, ensuring seamless functionality and engaging user experiences."
          />
          <Service
            image={webDevImage}
            title="Web Development"
            description="Building responsive, dynamic websites with cutting-edge technologies, ensuring optimal performance and user engagement."
          />
          <Service
            image={digitalMarketingImage}
            title="Digital Marketing"
            description="Driving brand visibility and customer engagement through strategic online campaigns and targeted marketing strategies."
          />
          <Service
            image={graphic}
            title="Graphic Designing"
            description="Creating visually stunning graphics for your brand, ensuring a strong visual identity and memorable impact."
          />
          <Service
            image={training}
            title="Training Program"
            description="Providing comprehensive training programs to enhance your skills and knowledge in various domains."
          />
          <Service
            image={internship}
            title="Internship Program"
            description="Offering valuable internship opportunities to gain practical experience and advance your career."
          />
        </div>
      </section>
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="why-choose-us-content">
            <img src={whyus} alt="Why Choose Us" />
            <div className="why-choose-us-text">
              <p>
                At Altruisty, we specialize in turning your app ideas into reality. Crafting user-friendly
                mobile applications tailored to your needs, ensuring seamless functionality and engaging
                user experiences.
              </p>
              <p>
                Discover why we're the best choice for your next project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
