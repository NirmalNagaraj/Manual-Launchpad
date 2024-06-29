import React from 'react';
import Services from './Services';
import CustomerService from './CustomerService';
import './ServicePage.css'; 

const ServicePage = () => {
  return (
    <div className="service-page">
      <Services />
      <CustomerService />
    </div>
  );
};

export default ServicePage;
