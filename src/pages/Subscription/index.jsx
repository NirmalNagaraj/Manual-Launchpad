import React, { useState } from 'react';
import './Subscription.css';

const Subscription = () => {
  const [currentPlan, setCurrentPlan] = useState('Basic'); 
  const [daysLeft, setDaysLeft] = useState(15); 

  const handleChoosePlan = (plan) => {
    
    alert(`Redirecting to payment page for ${plan} plan`);
   
  };

  return (
    <div className="pricing-container">
      <h1>Choose Your Plan</h1>
      <br/>
      <div className="current-plan-info">
        <p>Current Plan: <strong>{currentPlan}</strong></p>
        <p>Days Left: <strong>{daysLeft}</strong></p>
      </div>
      <div className="plans">
        <div className="plan basic">
          <h2>Basic</h2>
          <p className="price">249/-<br /><span>User/Month</span></p>
          <ul>
            <li>Plan features-1</li>
            <li>Plan features-2</li>
            <li>Plan features-3</li>
            <li>Plan features-4</li>
            <li className="disabled">Plan features-5</li>
            <li className="disabled">Plan features-6</li>
            <li className="disabled">Plan features-7</li>
            <li className="disabled">Plan features-8</li>
            <li className="disabled">Plan features-9</li>
          </ul>
          <button className="choose-plan" onClick={() => handleChoosePlan('Basic')}>Choose Plan</button>
        </div>
        <div className="plan advance">
          <h2>Advance</h2>
          <p className="price">/-<br /><span>User/Month</span></p>
          <ul>
            <li>Plan features-1</li>
            <li>Plan features-2</li>
            <li>Plan features-3</li>
            <li>Plan features-4</li>
            <li>Plan features-5</li>
            <li>Plan features-6</li>
            <li>Plan features-7</li>
            <li className="disabled">Plan features-8</li>
            <li className="disabled">Plan features-9</li>
          </ul>
          <button className="choose-plan" onClick={() => handleChoosePlan('Advance')}>Choose Plan</button>
        </div>
        <div className="plan premium">
          <h2>Premium</h2>
          <p className="price">399/-<br /><span>User/Month</span></p>
          <ul>
            <li>Plan features-1</li>
            <li>Plan features-2</li>
            <li>Plan features-3</li>
            <li>Plan features-4</li>
            <li>Plan features-5</li>
            <li>Plan features-6</li>
            <li>Plan features-7</li>
            <li>Plan features-8</li>
            <li>Plan features-9</li>
          </ul>
          <button className="choose-plan" onClick={() => handleChoosePlan('Premium')}>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

