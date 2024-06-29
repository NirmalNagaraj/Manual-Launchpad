import React, { useState } from 'react';
import { FaCloudDownloadAlt, FaTrash, FaFile } from 'react-icons/fa';
import './Files.css';

const Files = () => {
  const [files, setFiles] = useState([]);
  
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files).map((file) => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileNameChange = (index, newName) => {
    const updatedFiles = [...files];
    updatedFiles[index].name = newName;
    setFiles(updatedFiles);
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <div className="body">
    <div className='file'>
      <header className='page-header'>
        <h1>File Upload Page</h1>
      </header>
      
      <main>
        <form className='form'
          action=""
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            type='file'
            accept='*'
            className='input-field'
            hidden
            multiple
            onChange={handleFileChange}
          />
          <FaCloudDownloadAlt color='#1475cf' size={60} />
          <p>Browse Files to upload</p>
        </form>

        <section className='uploadedrow'>
          {files.map((fileObj, index) => (
            <div key={index} className='uploadcontent'>
              <FaFile color='#1475cf' />
              <input
                type="text"
                value={fileObj.name}
                onChange={(e) => handleFileNameChange(index, e.target.value)}
              />
              <FaTrash color='red' onClick={() => handleDeleteFile(index)} />
            </div>
          ))}
        </section>
      </main>
    </div>
    </div>
  );
};

export default Files;
