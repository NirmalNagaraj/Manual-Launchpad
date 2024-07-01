

import React, { useState } from 'react';
import './CustomerService.css';
import dummyImage from '../../assets/appdevelopment.jpg';

const CustomerServiceContent = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const CustomerService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, phone, location, service, message });
    alert('Your message has been sent!');
  };

  return (
    <div className="customer-service-container">
      <div className="customer-service">
        <h2>Contact Customer Service</h2>
        
        <div className="why-choose-us">
          <h3>Why Choose Us?</h3>
          <div className="why-choose-us-content">
            <p className="why-choose-us-text">
              We are committed to providing top-notch customer support and personalized solutions.
              Our team is dedicated to ensuring your satisfaction with timely responses and
              comprehensive assistance. Discover our range of services designed to meet your needs!
            </p>
          </div>
        </div>

        <div className="service-cards">
          <CustomerServiceContent
            image={dummyImage}
            title="Dedicated Support"
            description="Our customer service team is available 24/7 to assist you with any inquiries or issues you may have. We prioritize your satisfaction and are here to help."
          />
          <CustomerServiceContent
            image={dummyImage}
            title="Quick Response"
            description="We ensure a rapid response to your queries, minimizing wait times and providing effective solutions promptly."
          />
          <CustomerServiceContent
            image={dummyImage}
            title="Comprehensive Solutions"
            description="Our team offers a range of solutions tailored to meet your needs, ensuring you receive the best possible support."
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input
              list="locations"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <datalist id="locations">
              <option value="New York"></option>
              <option value="Los Angeles"></option>
              <option value="Chicago"></option>
              <option value="Houston"></option>
              <option value="Phoenix"></option>
            </datalist>
          </div>
          <div className="form-group">
            <label htmlFor="service">Service Required:</label>
            <textarea
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="enquiry">Enquiry:</label>
            <textarea
              id="enquiry"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerService;
