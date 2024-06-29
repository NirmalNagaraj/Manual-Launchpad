import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket, faAngleDown, faCircle, faBell,  faComments } from '@fortawesome/free-solid-svg-icons';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [dropdownActive, setDropdownActive] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setDropdownActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <span className="welcome-text">Welcome to Altruisty Launchpad</span>
            </div>
            
            <div className="profile-dropdown">
                <div onClick={toggleDropdown} className="profile-dropdown-btn" ref={buttonRef}>
                    <div className="profile-img">
                        <FontAwesomeIcon icon={faCircle} />
                    </div>
                    <span>
                        Name
                        <FontAwesomeIcon icon={faAngleDown} />
                    </span>
                </div>
                <ul className={`profile-dropdown-list ${dropdownActive ? 'active' : ''}`} ref={dropdownRef}>
                    <li className="profile-dropdown-list-item">
                        <Link to="/edit-profile">
                            <FontAwesomeIcon icon={faUser} />
                            Edit Profile
                        </Link>
                    </li>
                    <li className="profile-dropdown-list-item">
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
            <div className="notification-feedback">
                <Link to="/notifications">
                    <FontAwesomeIcon icon={faBell} className="icon" />
                </Link>
                <Link to="/feedbackform">
                    <FontAwesomeIcon icon={faComments} className="icon" />
                </Link>
                <Link to="/community">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                </Link>
                
            </div>
        </nav>
    );
};

export default Navbar;
