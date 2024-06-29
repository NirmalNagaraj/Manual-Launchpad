import React, { useState } from 'react';
import './EditProfile.css'; 

const EditProfile = ({ user }) => {
  const initialProfile = {
    name: user?.name || 'Default Name',
    email: user?.email || 'Default Email',
    phone: user?.phone || 'Default Phone',
  };

  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Profile saved:', profile);
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={profile.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={profile.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input 
            type="text" 
            name="phone" 
            value={profile.phone} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Save</button>
        {/* Add more form fields as needed */}
      </form>
    </div>
  );
};

export default EditProfile;
