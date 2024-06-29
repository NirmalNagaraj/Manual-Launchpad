import React from 'react';

const Progress = ({ label, progress, startDate, endDate }) => {
  return (
    <div className="progress-item">
      <h4>{label}</h4>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}% Complete</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
    </div>
  );
};

export default Progress;
