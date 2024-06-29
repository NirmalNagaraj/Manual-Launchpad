import React from 'react';
import './PaymentPage.css';

const PaymentPage = ({ selectedPlan }) => {
  const handlePayment = () => {
  
    alert(`Payment successful for ${selectedPlan} plan`);
    
  };

  return (
    <div className="payment-container">
      <h1>Payment Details</h1>
      <p>Please enter your payment details to complete the subscription for {selectedPlan} plan:</p>
      <form className="payment-form" onSubmit={handlePayment}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" required />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" required />
        <button type="submit" className="pay-now">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
