import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css'; 

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/login');
  };

  return (
    <div className="logout">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
