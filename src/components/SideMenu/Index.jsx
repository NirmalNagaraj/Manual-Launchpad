
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaBell, FaBox, FaCalendar, FaTimes, FaMoneyBillWave , FaTachometerAlt, FaTasks, FaFileAlt, FaRobot, FaHandsHelping, FaUsers, FaCalendarAlt, FaDollarSign, FaCog } from 'react-icons/fa';
import './SideMenu.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to="/dashboard" className="sidebar-item" onClick={toggleSidebar}>
          <FaTachometerAlt className="icon" /> Dashboard
        </Link>
        <Link to="/tasks" className="sidebar-item" onClick={toggleSidebar}>
          <FaTasks className="icon" /> My Tasks
        </Link>
        <Link to="/ai-assistant" className="sidebar-item" onClick={toggleSidebar}>
          <FaRobot className="icon" /> AI Chatbot
        </Link>
        <Link to="/calendarpage" className="sidebar-item" onClick={toggleSidebar}>
          <FaCalendar className="icon" /> Calendar
        </Link>
        <Link to="/customer-service" className="sidebar-item" onClick={toggleSidebar}>
          <FaHandsHelping className="icon" /> Customer Service
        </Link>
        <Link to="/scheduler" className="sidebar-item" onClick={toggleSidebar}>
          <FaCalendarAlt className="icon" /> Meeting Scheduler
        </Link>
        <Link to="/investment" className="sidebar-item" onClick={toggleSidebar}>
          <FaDollarSign className="icon" /> Investment Request
        </Link>
        <Link to="/mysubscription" className="sidebar-item" onClick={toggleSidebar}>
          <FaBox className="icon" /> My Subscription
        </Link>
        <Link to="/settings" className="sidebar-item" onClick={toggleSidebar}>
          <FaCog className="icon" /> Settings
        </Link>
        <Link to="/admin-dashboard" className="sidebar-item" onClick={toggleSidebar}>
          <FaTachometerAlt className="icon" /> Admin Dashboard
        </Link>
        <Link to="/funding" className="sidebar-item" onClick={toggleSidebar}>
          <FaMoneyBillWave className="icon" /> Funding
        </Link>
      </div>
    </>
  );
};

export default SideMenu;
