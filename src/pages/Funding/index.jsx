import React from 'react';
import './Funding.css'; 

const Funding = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DPIIT Recognition</h1>
      </header>
      <div className="maincontent">
        <div className="card">
          <img src="path-to-your-image" alt="Eligibility" />
          <h3>Check Your Eligibility</h3>
          <p>A startup must meet certain criteria to be considered eligible for DPIIT Recognition.</p>
          <button>Check Eligibility</button>
        </div>
        <div className="card">
          <img src="path-to-your-image" alt="Get Recognized" />
          <h3>Get Recognised</h3>
          <p>Click here to know more about the recognition process & apply as a Startup.</p>
          <button>Know more</button>
        </div>
        <div className="card">
          <img src="path-to-your-image" alt="Notifications" />
          <h3>Notifications</h3>
          <p>Stay on top of Recognition & Tax Exemption updates.</p>
          <button>Know more</button>
        </div>
        <div className="card">
          <img src="path-to-your-image" alt="Validate Certificate" />
          <h3>Validate Certificate</h3>
          <p>Click here to verify your Recognition/Tax Exemption certificates.</p>
          <button>Verify your DPIIT Certification</button>
        </div>
        <div className="benefits-container">
          <h2>Benefits of Startup Recognition</h2>
          <ul>
            <li>Self Certification</li>
            <li>Patent Application & IPR Protection</li>
            <li>Income Tax Exemption</li>
            <li>Easier Public Procurement Norms</li>
            <li>Easy Winding Up of Company</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Funding;
