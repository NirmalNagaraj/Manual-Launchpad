
import React, { useState } from 'react';
import './Investment.css';
import investmentImage from '../../assets/program_1.jpg';

const Investment = () => {
    const [showForm, setShowForm] = useState(false);
    const [companyDomain, setCompanyDomain] = useState('');

    const handleApplyClick = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="investment-container">
            <h1>Investment Opportunities</h1>
            <div className="investment-content">
                {!showForm && (
                    <div className="investment-details">
                        <div className="investment-grid">
                            <div className="text-section">
                                <p>
                                    <strong>Request to get investment</strong><br />
                                    Welcome to our investment request page. We are excited to hear about your innovative projects and ideas. Our goal is to support entrepreneurs and businesses by providing the necessary funding to help bring their visions to life.
                                </p>
                                <p>
                                    <strong>Process to get investment</strong><br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita numquam ea harum. Suscipit officiis deleniti ducimus saepe repellendus qui, blanditiis, optio explicabo perspiciatis eveniet illo est nulla ipsum, aperiam placeat?
                                </p>
                                <ul>
                                    <li>Competitive funding options</li>
                                    <li>Access to a network of industry professionals</li>
                                    <li>Personalized mentorship and guidance</li>
                                    <li>Comprehensive business support</li>
                                </ul>
                                <p>
                                    <strong>How to Apply:</strong><br />
                                    Click the "Apply" button below to fill out our investment request form. Please provide detailed information about your project, funding requirements, and any supporting documents.
                                </p>
                                <button className="button" onClick={handleApplyClick}>Apply for Investment</button>
                            </div>
                            <div className="image-section">
                                <img src={investmentImage} alt="Investment" className="investment-image" />
                            </div>
                        </div>
                    </div>
                )}
                {showForm && (
                    <div className="investment-form">
                        <form>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="Name"> Name</label>
                                    <input type="text" id="Name" name="Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="projectName">Project Title</label>
                                    <input type="text" id="projectName" name="projectName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNo">Phone Number</label>
                                    <input type="tel" id="phoneNo" name="phoneNo" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input type="text" id="companyName" name="companyName" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="companyDomain">Company Domain</label>
                                    <select id="companyDomain" name="companyDomain" value={companyDomain} onChange={(e) => setCompanyDomain(e.target.value)} required>
                                        <option value="" disabled>Select Domain</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Education">Education</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amountNeeded">Amount Needed</label>
                                    <input type="number" id="amountNeeded" name="amountNeeded" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="file">Upload Pitch tech</label>
                                    <input type="file" id="file" name="file" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="file">Upload Proposal</label>
                                    <input type="file" id="file" name="file" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="file">Project explanation video</label>
                                    <input type="file" id="file" name="file" />
                                </div>
                            </div>
                            <button className="button" type="submit">Submit Request</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Investment;
