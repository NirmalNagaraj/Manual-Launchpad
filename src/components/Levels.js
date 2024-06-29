import React, { useState } from 'react';
import './Levels.css';

const Levels = ({ task, onComplete, onBack }) => {
  const [uploadedFiles, setUploadedFiles] = useState(Array(task.levels.length).fill(null));

  const handleLevelClick = (index) => {
    if (uploadedFiles[index]) {
      const updatedLevels = [...task.levels];
      updatedLevels[index] = !updatedLevels[index];
      onComplete(task.id, updatedLevels);
    } else {
      alert("Please upload a file to complete this level.");
    }
  };

  const handleFileUpload = (index, file) => {
    const newUploadedFiles = [...uploadedFiles];
    newUploadedFiles[index] = file;
    setUploadedFiles(newUploadedFiles);
  };

  return (
    <div className="levels-container">
      <h2 className="stage-title">{task.title}</h2>
      <div className="levels-grid">
        {task.levels.map((level, index) => (
          <div key={index} className={`level ${level ? 'completed' : ''}`}>
            <div className="level-info">
              <span>Level {index + 1}</span>
              <input
                type="file"
                onChange={(e) => handleFileUpload(index, e.target.files[0])}
                disabled={index !== 0 && !task.levels[index - 1]}
              />
              <button
                onClick={() => handleLevelClick(index)}
                disabled={index !== 0 && !task.levels[index - 1]}
              >
                {level ? 'Completed' : 'Complete Level'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={onBack}>Back</button>
    </div>
  );
};

export default Levels;
