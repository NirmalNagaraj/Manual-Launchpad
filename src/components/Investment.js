import React, { useState } from 'react';
import './Investment.css';

const Investment = () => {
    const [showForm, setShowForm] = useState(false);

    const handleApplyClick = () => {
        setShowForm(true);
    };

    return (
        <div className="investment-container">
            <h1>Investment Request</h1>
            <div className="investment-content">
                {!showForm && (
                    <div className="investment-details">
                        <p>
                            Welcome to our investment request page. We are excited to hear about your innovative projects and ideas. Our goal is to support entrepreneurs and businesses by providing the necessary funding to help bring their visions to life.
                        </p>
                        <p>
                            <strong>Why Choose Us?</strong><br />
                            We offer competitive funding options, mentorship, and a network of industry professionals to help you succeed. Our team is dedicated to understanding your business needs and providing tailored support to ensure your project's success.
                        </p>
                        <p>
                            <strong>How to Apply:</strong><br />
                            Click the "Apply" button below to fill out our investment request form. Please provide detailed information about your project, funding requirements, and any supporting documents such as your business plan and financial projections.
                        </p>
                        <button className="button" onClick={handleApplyClick}>Apply</button>
                    </div>
                )}
                {showForm && (
                    <div className="investment-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectName">Project Name</label>
                                <input type="text" id="projectName" name="projectName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNo">Phone No</label>
                                <input type="tel" id="phoneNo" name="phoneNo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" id="companyName" name="companyName" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="workModel">Work Model</label>
                                <input type="file" id="workModel" name="workModel" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="amountNeeded">How Much Amount Needed</label>
                                <input type="number" id="amountNeeded" name="amountNeeded" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="file">Upload PPT</label>
                                <input type="file" id="file" name="file" />
                            </div>
                            <button className="button" type="submit">Send Message</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Investment;
